<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('request_id');
            $table->boolean('is_signed')->default(false);
            $table->unsignedInteger('user_id')->nullable();
            $table->string('email')->nullable();
            $table->string('ip')->nullable();
            $table->timestamp('signed_at')->nullable();
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
        Schema::dropIfExists('request_users');
    }
}
