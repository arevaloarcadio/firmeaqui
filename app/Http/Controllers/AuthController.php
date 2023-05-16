<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use Symfony\Component\HttpFoundation\Response;
use App\Models\{RequestUser,User};
use App\Traits\ApiController;
use App\Helpers\Api as ApiHelper;

class AuthController extends Controller
{   
    use ApiController;
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(
            'auth:api', ['except' => ['login','register']]
        );
    }
    /**
     * Get a JWT via given credentials.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $credentials = $request->only(['email', 'password']);
        
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'],Response::HTTP_BAD_REQUEST );
        }
        
        $user = User::where('email',$request->email)->first();
    
        return $this->respondWithToken($token,$user);
    }

    public function register(Request $request)
    {
        $resource = ApiHelper::resource();

        $validator = \Validator::make($request->all(),[
            'email' => 'required|email|unique:users',
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
            $user->is_admin = false;
            $user->password = Hash::make($request->password);
            $user->save();
        
            $credentials = $request->only(['email', 'password']);

            $request_user = RequestUser::where('email',$user->email)
                ->update(['user_id' => $user->id]);

            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
            }
        
            return $this->respondWithToken($token,$user);
        } catch (Exception $e) {
            ApiHelper::setException($resource, $e);
        }
        return $this->sendResponse($resource);
    }
    /**
     * Get the authenticated User.
     *
     * @return JsonResponse
     */
    public function me(): JsonResponse
    {
        return response()->json(auth()->user());
    }
    /**
     * Log the user out (Invalidate the token).
     *
     * @return JsonResponse
     */
    public function logout(): JsonResponse
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh(): JsonResponse
    {
        return $this->respondWithToken(auth()->refresh(),auth()->user());
    }
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return JsonResponse
     */
    protected function respondWithToken(string $token,$user): JsonResponse
    {
        return response()->json([
            'token' => $token,
            'user' => $user,
            'token_type' => 'bearer',
        ]);
    }
}