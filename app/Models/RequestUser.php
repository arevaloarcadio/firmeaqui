<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class RequestUser extends Pivot
{
    use HasFactory;

    protected $table = "request_users"; 

  
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
