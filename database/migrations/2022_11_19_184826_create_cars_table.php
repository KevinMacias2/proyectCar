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
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('model');
            $table->string('type');
            $table->integer('year');
            $table->string('color');
            $table->integer('price');
            $table->integer('km');
            $table->string('source');
            $table->string('equipment');
            $table->integer('numSales');
            $table->string('observation');
            $table->unsignedBigInteger('brandId');
            $table->foreign('brandId')->references('id')->on('brands')->onDelete('cascade');
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
        Schema::dropIfExists('cars');
    }
};
