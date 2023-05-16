<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Helpers\Api as ApiHelper;
use App\Http\Resources\Data;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Traits\ApiController;

class UserController extends Controller
{   
    use ApiController;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

        $validator = \Validator::make($request->all(),[
            'email' => 'required|email',
            'name' => 'required',
            'password' => 'required|confirmed'
        ]);

        if($validator->fails()){
            ApiHelper::setError($resource, 0, 422, $validator->errors());
            return $this->sendResponse($resource);
        }

        try {
            
            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            
            return response()->json(['data' => $user]);
        } catch (Exception $e) {
            ApiHelper::setException($resource, $e);
        }
        return $this->sendResponse($resource);
    }

    public function search(Request $request)
    {
        
        $resource = ApiHelper::resource();

        try{
            
            $users = User::where('email','LIKE','%'.$request->user_like.'%')
                ->whereNotIn('email',[Auth::user()->email])
                ->paginate(10);

            $data  = new Data($users);
            $resource = array_merge($resource, $data->toArray($request));
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
        
    }

    public function showByEmail(Request $request,$email)
    {
        $resource = ApiHelper::resource();

        try{
            
            $user = User::where('email',$email)->first();

            $data  = new Data($user);
            $resource = array_merge($resource, $data->toArray($request));
            ApiHelper::success($resource);
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
        $resource = ApiHelper::resource();

        $validator = \Validator::make($request->all(),[
            'email' => 'sometimes|email|unique:users,email,'.(int) $id,
            'name' => 'sometimes',
        ]);

        if($validator->fails()){
            ApiHelper::setError($resource, 0, 422, $validator->errors());
            return $this->sendResponse($resource);
        }

        try {
            
            $user = User::where('id',$id)->first();
            $user->name = $request->name;
            $user->email = $request->email;

            if ($request->file('picture')) {
                $file = $request->file('picture');
                $picture = $file->getClientOriginalName();
                $destinationPath = storage_path('/app/storage/profiles/'.$id);
                $move = $file->move($destinationPath, $picture);
                $path = 'storage/profiles/'.$id.'/'.$picture;
                $user->photo = $path;
            }
           
            $user->save();

            return response()->json(['data' => $user]);
        } catch (Exception $e) {
            ApiHelper::setException($resource, $e);
        }

        return $this->sendResponse($resource);
    }

    public function update_password(Request $request)
    {
        $resource = ApiHelper::resource();

        $validator = \Validator::make($request->all(),[
            'password' => 'required|confirmed'
        ]);

        if($validator->fails()){
            ApiHelper::setError($resource, 0, 422, $validator->errors());
            return $this->sendResponse($resource);
        }

        try {
            
            $user = User::where('id',Auth::user()->id)->first();
            $user->password = Hash::make($request->password);
            $user->save();

            return response()->json(['data' => $user]);
        } catch (Exception $e) {
            ApiHelper::setException($resource, $e);
        }

        return $this->sendResponse($resource);
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
}
