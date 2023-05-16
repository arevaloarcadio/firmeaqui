<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{User,RequestUser,Document,SignDocument};
use App\Models\Request as Requests;
use App\Helpers\Api as ApiHelper;
use App\Http\Resources\Data;
use Illuminate\Support\Facades\Auth;
use App\Traits\{SendTriggerPusher,ApiController};
use Illuminate\Support\Facades\Notification;
use App\Notifications\NewRequest;
use Illuminate\Support\Str;

class RequestController extends Controller
{
    use ApiController;
    use SendTriggerPusher;

    public function index(Request $request)
    {
        $resource = ApiHelper::resource();

        try{
            

            $requests =  Requests::with([
                'document',
                'user_creator',
                'users',
                'request_users' => function($query){
                    $query->with('user');
                }
            ])->paginate(10);

            return response()->json(['data' => $requests]);
        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }
        return $this->sendResponse($resource);
    }

    public function byUserAuth(Request $request)
    {
        $resource = ApiHelper::resource();

        try{
             
            $user = Auth::user();
            $requests = $user->requests()->with(['document','users','request_users','user_creator'])->orderBy('created_at','DESC') ->paginate(10);
           
            return response()->json(['data' => $requests]);
        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }
        return $this->sendResponse($resource);
    }

    public function byUserCreator(Request $request)
    {
        $resource = ApiHelper::resource();

        try{
             
            $user = Auth::user();
            
            $requests = $user->creator_requests()->with(['document','users','request_users','user_creator'])->orderBy('created_at','DESC') ->paginate(10);
           
            return response()->json(['data' => $requests]);
        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }
        return $this->sendResponse($resource);
    }
    public function store(Request $request)
    {   
        ini_set('max_execution_time', 0);

        $resource = ApiHelper::resource();

        $validator = \Validator::make($request->all(),[
            'sign_documents' => 'required|array',
            'users' => 'required|array',
            'users.*.email' => 'required|email',
            'document_id' => 'required',
            'subject' => 'required',
            'description' => 'nullable',
        ]);

        if($validator->fails()){
            ApiHelper::setError($resource, 0, 422, $validator->errors());
            return $this->sendResponse($resource);
        }

        try {

            $requests = new Requests;
            $requests->subject = $request->subject;
            $requests->message = $request->message;
            $requests->document_id = $request->document_id;
            $requests->user_creator_id = Auth::user()->id;
            $requests->uuid = Str::uuid()->toString();
            $requests->save();

            foreach ($request->sign_documents as $sign_document) {
                $sign_document_ = new SignDocument;
                $sign_document_->document_id = $request->document_id;
                $sign_document_->description = $sign_document['name'];
                $sign_document_->position_x = $sign_document['percentage_left'];
                $sign_document_->position_y = $sign_document['percentage_top'];
                $sign_document_->height = $sign_document['height'];
                $sign_document_->width = $sign_document['width'];
                $sign_document_->email = $sign_document['email'];
                $sign_document_->num_page = $sign_document['num_page'];
                $sign_document_->save();
            }
            
            $request_ = Requests::where('id',$requests->id)->with([
                'document' => function($query){
                    $query->with('template_signs');
                },
                'user_creator',
                'request_users' => function($query){
                    $query->with('user');
                }
            ])->first();
            
            $request_['document']['path_image_url'] = url($request_['document']['path_image']);
            $request_['document']['path_url'] = url($request_['document']['path']);
            
            foreach ($request->users as $user) {
               
                $request_user = new RequestUser;
                
                $user_ = User::where('email',$user['email'])->first();

                if (is_null($user_)) {
                    $request_user->email = $user['email'];
                }else{
                    $request_user->user_id = $user_->id;
                    $request_user->email = $user['email'];
                }

                $request_user->request_id =  $requests->id;
                $request_user->save();

                Notification::route('mail',$user['email'])
                    ->notify(new NewRequest(Auth::user(),$requests,$user['email']));

                $this->send('channel-'.$user['email'],'receipts',$request_);
            }

            return response()->json(['data' => $requests]);
        } catch (Exception $e) {
            ApiHelper::setException($resource, $e);
        }
        return $this->sendResponse($resource);
    }

    public function showByUuid(Request $request, $uuid)
    {
        $resource = ApiHelper::resource();

        try{

            $requests = Requests::where('uuid',$uuid)->with([
                'document' => function($query){
                    $query->with('template_signs');
                },
                'user_creator',
                'request_users' => function($query){
                    $query->with('user');
                }
            ])->first();
            
            $requests['document']['path_image_url'] = url($requests['document']['path_image']);
            $requests['document']['path_url'] = url($requests['document']['path']);

            return response()->json(['data' => $requests]);
        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }
        
        return $this->sendResponse($resource);
    }

    public function validateUserRequest(Request $request, $uuid, $email)
    {
        $resource = ApiHelper::resource();

        try{

            $request = Requests::where('uuid',$uuid)->with([
                'document' => function($query){
                    $query->with([
                        'template_signs',
                        'document_images' => function($query){
                            $query->orderBy('num_page','ASC');
                        }
                    ]);
                },
                'user_creator',
                'request_users' => function($query){
                    $query->with('user');
                }
            ])->first();
            
            $validate = false;
            $user = null;
            
            if (!is_null($request)) {
               foreach ($request->request_users as $request_user) {
                    if (is_null($request_user->email)) {
                        $user = User::where('id',$request_user->user_id)->first();
                        if ($email == $user->email) {
                            $validate = true;
                        }
                    }else{
                        if ($request_user->email == $email) {
                           $validate = true;  
                        }
                    }
                } 
            }else{
                ApiHelper::setError($resource, 0, 422, ['request' => 'Request not found']);
                return $this->sendResponse($resource);
            }

            if ($validate) {
                
                $request['document']['path_image_url'] = url($request['document']['path_image']);
                $request['document']['path_url'] = url($request['document']['path']);

                return response()->json([
                    'data' => [
                        'request' => $request, 
                        'user' => $user, 
                        'validate' => $validate
                    ]
                ]);

            }else{
                return response()->json([
                    'data' => [
                        'validate' => $validate
                    ]
                ]);
            }

        }catch(\Exception $e){
            ApiHelper::setException($resource, $e);
        }
        
        return $this->sendResponse($resource);
    }
}
