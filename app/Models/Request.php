<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    
    public function document()
    {
        return $this->belongsTo(Document::class);
    }

    public function user_creator()
    {
        return $this->belongsTo(User::class,'user_creator_id');
    }

    public function request_users()
    {
        return $this->hasMany(RequestUser::class);
    }

    public function users(){
      	return $this->belongsToMany(User::class,'request_users','request_id','user_id')
            ->using(RequestUser::class)
            ->withPivot(['is_signed']);
    }
}
