<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSignDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sign_documents', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('document_id');
            $table->string('description');
            $table->string('position_x');
            $table->string('position_y');
            $table->string('height');
            $table->string('width');
            $table->string('email');
            $table->string('num_page');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sign_documents');
    }
}
