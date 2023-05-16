<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::namespace('App\Http\Controllers')->group(static function() {
	Route::group([
	    'middleware' => 'api',
	    'prefix' => 'auth'
	], function ($router) {
	    Route::post('login', 'AuthController@login');
	    Route::post('register', 'AuthController@register');
	    Route::post('logout', 'AuthController@logout');
	    Route::post('refresh', 'AuthController@refresh');
	    Route::get('me', 'AuthController@me');
	});

	Route::prefix('users')->group(function() {
		Route::get('/{email}', 'UserController@showByEmail');
	});

	Route::group(['middleware' => ['jwt.verify']], function() {
		
		Route::prefix('documents')->group(function() {
			Route::get('/', 'DocumentController@index');
		    Route::post('/', 'DocumentController@store');
		    Route::post('/convert-pdf', 'DocumentController@convertPdfToImage');
		    Route::post('/search', 'DocumentController@search');
		});

		Route::prefix('users')->group(function() {
			Route::post('/password', 'UserController@update_password');
			Route::post('/search', 'UserController@search');
			Route::post('/{id}', 'UserController@update');
		});

		Route::prefix('requests')->group(function() {
			Route::get('/', 'RequestController@index');
			Route::get('/by-user', 'RequestController@byUserAuth');
			Route::get('/by-user-creator', 'RequestController@byUserCreator');
			Route::post('/', 'RequestController@store');
		});
	});
});

Route::namespace('App\Http\Controllers')->group(static function() {
	Route::prefix('requests')->group(function() {
		Route::get('/{uuid}', 'RequestController@showByUuid');
		Route::get('/validate/{uuid}/{email}', 'RequestController@validateUserRequest');
	});
	
	Route::prefix('documents')->group(function() {
		Route::post('/sign', 'DocumentController@sign');
	});		  
});
