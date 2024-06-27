<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    public function template_signs()
    {
        return $this->hasMany(SignDocument::class);
    }
    
    public function document_images()
    {
        return $this->hasMany(DocumentImage::class);
    }
}
