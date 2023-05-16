<?php

namespace App\Traits;

use Pusher\Pusher;

trait SendTriggerPusher
{
    public function send($channel,$event,$data)
    {
        $pusher = new Pusher(
	        env('PUSHER_APP_KEY'),
	        env('PUSHER_APP_SECRET'),
	        env('PUSHER_APP_ID'),
	        [ 
	            'cluster' => env('PUSHER_APP_CLUSTER'),
	            'useTLS' => true
	        ]
	    );

        $pusher->trigger($channel,$event,$data);
    }
}
