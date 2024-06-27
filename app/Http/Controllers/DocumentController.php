<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{User,RequestUser,Document,DocumentImage,SignDocument,SignDocumentUser, Request as Requests};
use App\Helpers\Api as ApiHelper;
use App\Http\Resources\Data;
use App\Traits\{SendTriggerPusher,ApiController};
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use setasign\Fpdi\Fpdi;
use Storage;
use FPDF;
use Imagick;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon as DateTime;

class DocumentController extends Controller
{
    use ApiController;
    use SendTriggerPusher;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $resource = ApiHelper::resource();

        try{

            $user = Auth::user();
            $requests = $user->requests()->with(['document','user_creator'])->paginate(10);

            return response()->json(['data' => $requests]);
        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }
        
        return $this->sendResponse($resource);
    }

    public function search(Request $request)
    {
        
        $resource = ApiHelper::resource();

        try{
            
            $documents =  Document::where('document_name','LIKE','%'.$request->needle.'%')->paginate(10);

            $data  =  new Data($documents);
            $resource = array_merge($resource, $data->toArray($request));
            ApiHelper::success($resource);
        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }
        
        return $this->sendResponse($resource);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   

        $resource = ApiHelper::resource();

        $validator= \Validator::make($request->all(),[
            'document' => 'required|file',
            'document_name' => 'required|string',
            'user_for_id' => 'required|numeric|exists:users,id',
        ]);

        if($validator->fails()){
            ApiHelper::setError($resource, 0, 422, $validator->errors());
            return $this->sendResponse($resource);
        }

        try{

            $document = new Document;
            $document->path = $this->uploadFile($request->file('document'));
            $document->document_name = $request->document_name;
            $document->user_for_id = $request->user_for_id;
            $document->user_creator_id = Auth::user()->id;
            $document->is_signed = false;
            $document->save();

            $data  =  new Data($document);
            $resource = array_merge($resource, $data->toArray($request));
            ApiHelper::success($resource);
        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }

        return $this->sendResponse($resource);
    }

    public function convertPdfToImage(Request $request)
    {   
        ini_set('max_execution_time', 0);

        $resource = ApiHelper::resource();

        try{
            
            $file = $request->file('document');

            $path = $this->uploadFile($file);
            
            $num_page = (int) $this->getNumPagePdf(storage_path('app/'.$path));
            
            $document = new Document;
            $document->path = $path;
            $document->save();

            $images = [];
            
            for ($i=0; $i < $num_page; $i++) { 
                $imagick = new Imagick();
                $imagick->readImage(storage_path('app/'.$path.'['.$i.']'));
                $imagick->setResolution(2000,2000);
                $imagick->flattenImages();
                $image = 'storage/pdf-images/'.Str::uuid()->toString().'.jpg';
               $imagick->writeImages(storage_path('app/'.$image),false);
                
                $document_image = new DocumentImage;
                $document_image->document_id = $document->id;
                $document_image->path = $image;
                $document_image->num_page = ($i+1);
                $document_image->save();

                array_push($images, $document_image->path);
            }

            return response()->json([
                'response' => 'OK', 
                'data' => [
                    'path' => $path, 
                    'images' => $images,
                    'document' => $document,
                    'num_page' => $num_page
                ]
            ]);
            
            ApiHelper::success($resource);
        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }

        return $this->sendResponse($resource);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function sign(Request $request)
    {
        ini_set('max_execution_time', 0);
        
        $resource = ApiHelper::resource();

        $validator= \Validator::make($request->all(),[
            'template_sign_ids' => 'required|array',
            'template_sign_ids.*' => 'required|numeric|exists:sign_documents,id',
            //'user_id' => 'required|numeric|exists:users,id',
            'document_id' => 'required|numeric|exists:documents,id',
            'image_sign' => 'required|file',
            'email' => 'required|email',
            'ip' => 'nullable',
        ]);

        if($validator->fails()){
            ApiHelper::setError($resource, 0, 422, $validator->errors());
            return $this->sendResponse($resource);
        }

        try{

            $documento = Document::find($request->document_id);

            $requests = Requests::where('document_id',$request->document_id)->first();
            
            $num_page = DocumentImage::where('document_id',$request->document_id)->count();
        
            $fpdf = new FPDF;
        
            $pdf = new Fpdi; 
            
            $file = $request->file('image_sign');
                
            $directory = storage_path('app/storage/firmas/'.$documento->id);
            $firma = $file->getClientOriginalName();
            $documento_file = 'storage/firmas/'.$documento->id.'/'.$firma.'.png';
            $destinationPath = $directory;
            $move = $file->move($destinationPath, $documento_file);
            
            for ($i=0; $i < $num_page; $i++) {

                $pdf->AddPage(); 
                
                if (is_null($requests->signed_document_path)) {
                    $pdf->setSourceFile(storage_path('app/'.$documento->path));
                }else{
                    $pdf->setSourceFile(storage_path('app/'.$requests->signed_document_path));
                }
               
                $pdf->SetFont('Arial', '', '13');

                $tplIdx = $pdf->importPage($i+1);
                
                $pdf->useTemplate($tplIdx, 0, 0, $pdf->GetPageWidth(),$pdf->GetPageHeight());

                $sign_documents = SignDocument::whereIn('id',$request->template_sign_ids)
                    ->where('num_page',$i)
                    ->get();

                foreach ($sign_documents as $sign_document) {
               
                    $x = ($sign_document->position_x * $pdf->GetPageWidth()) / 100;
                    $y = ($sign_document->position_y * $pdf->GetPageHeight()) / 100;
                    $w = ($sign_document->width * $pdf->GetPageWidth()) / 100;
                    $h = ($sign_document->height * $pdf->GetPageHeight()) / 100;
                    
                    $pdf->Image(
                        storage_path('/app/storage/firmas/'.$documento->id.'/'.$firma.'.png'),
                        $x,
                        $y,
                        $w,
                        $h,
                        'PNG',
                        null
                    ); 
                }
            }
            
            $path = 'storage/documento_firmados/'.$documento->id.'/'.date('Ymdhm').'.pdf';
            
            $requests->signed_document_path = is_null($requests->signed_document_path) ? $path : $requests->signed_document_path;
            $requests->save();

            $request_user = RequestUser::where('request_id',$requests->id)
                ->where('email',$request->email)
                ->first();
            $request_user->is_signed = true;
            $request_user->ip = $requests->ip;
            $request_user->signed_at = DateTime::now();
            $request_user->save();

            Storage::put($requests->signed_document_path,$pdf->Output("","S"));
            
            $user_creator = User::where('id',$requests->user_creator_id)->first();
            
            $this->send('channel-'.$user_creator['email'],'requests',['message' => $request->email." ha firmado el documento"]);

            return response()->json(['data' => 'OK']);
        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }

        return $this->sendResponse($resource);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function uploadFile($file)
    {   
        $name = '0-'.$file->getClientOriginalName();
        $name_2 = $file->getClientOriginalName();
        $folder = Str::uuid()->toString();
        $directory = 'storage/pdf-convert/'.$folder.'/';
        $destinationPath = storage_path('/app/storage/pdf-convert/'.$folder);
        $move = $file->move($destinationPath, $name);
        
        $command = "\"".env('BIN_GHOSTSCRIPT')."\" -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dNOPAUSE -dQUIET -dBATCH -sOutputFile=\"".$destinationPath.'/'.$file->getClientOriginalName()."\" \"".$destinationPath.'/0-'.$file->getClientOriginalName()."\"";
        
        Log::debug($command);

        shell_exec($command);
        
        $path = $directory.$name_2;
        
        //Storage::disk('local')->delete($directory.$name);

        return $path;
    }

    public function getNumPagePdf($file)
    {
        $stream  = fopen($file,"r");
        $content = fread($stream,filesize($file));

        if (!$stream || !$content) 
            return 0;

        $count = 0;

        $regex = "/\/Count\s+(\d+)/";
        $regex2 = "/\/Page\W*(\d+)/";
        $regex3 = "/\/N\s+(\d+)/";

        if (preg_match_all($regex, $content, $matches)) {
            $count = max($matches);
        }

        return $count[0];
    }
}
