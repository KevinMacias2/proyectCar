<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name');
            $table->string('address');
            $table->string('location');
            $table->string('city');
            $table->integer('CP');
            $table->string('phone');
            $table->string('rol_job');
            $table->integer('salary');
            $table->unsignedBigInteger('jobId');
            $table->foreign('jobId')->references('id')->on('labor_data')->onDelete('cascade');
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
        Schema::dropIfExists('customers');
    }
};
