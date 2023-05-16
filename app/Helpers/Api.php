<?php

namespace App\Helpers;

use League\OAuth2\Server\Exception\OAuthServerException;
use Illuminate\Support\Facades\Notification;
use App\Notifications\{SendErrorException,SendErrorExceptionSlack};
use App\Models\User;

class Api{
    public static function resource(){
        $resource = [];
        $resource['response'] = 'ERROR';
        $resource['data'] = [];
        $resource['error']  = [
            'code' => 0,
            'status_code' => 500,
            'message' => 'unknown',
            'line' => 0,
            'type' => 'system'
        ];
        return $resource;
    }
    public static function setException(&$resource, \Exception $exception){
        $message = $exception->getMessage();
        $line = $exception->getLine();

        $resource['error']['code'] = $exception->getCode();
        if ($exception instanceof OAuthServerException) {
           $resource['error']['status_code'] =  $exception->getHttpStatusCode();
          // $message  =

        }
        if((!$exception instanceof OAuthServerException) && method_exists($exception, 'getStatusCode')){
            $resource['error']['status_code'] =  $exception->getStatusCode();
            if($exception->getStatusCode() === 404 && empty($message)){
                $message = 'Page not found';
            }
        }
        $resource['error']['message'] = $message;
        $resource['error']['line'] = $line;
        $resource['error']['type']   = 'unknown';

        if($resource['error']['status_code'] === 500){
            
            $user = User::first();

            $user->notify(new SendErrorExceptionSlack($exception));

            //Notification::route('mail',['arevaloarcadio.96@gmail.com','acevedocarles@gmail.com'])
                //->notify(new SendErrorException($exception));
        }
    }
    public static function success(&$resource){
        $resource['response'] =  'OK';
        unset($resource['error']);
    }
    public static function setError(&$resource, $code = 0, $status_code = 500, $message ){
        $resource['response'] = 'ERROR';
        $resource['error']['code'] = $code;
        $resource['error']['status_code'] = $status_code;
        $resource['error']['message'] = $message;
        //$resource['error']['type']   = $type;
    }
}
