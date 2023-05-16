<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class SignDocument extends Pivot
{
    use HasFactory;

    protected $table = "sign_documents"; 

    public function signed_users()
    {
        return $this->hasMany(SignDocumentUser::class,'sign_document_id');
    }
}
