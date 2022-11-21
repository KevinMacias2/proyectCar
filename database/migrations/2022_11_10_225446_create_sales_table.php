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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->date('date_sales');
            $table->integer('total');

            $table->unsignedBigInteger('carId');
            $table->foreign('carId')
            ->references('id')->on('cars')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->unsignedBigInteger('customerId');
            $table->foreign('customerId')
            ->references('id')->on('customers')
                ->onDelete('cascade')
                ->onUpdate('cascade');

                $table->unsignedBigInteger('sellerId');
            $table->foreign('sellerId')
            ->references('id')->on('sellers')
                ->onDelete('cascade')
                ->onUpdate('cascade');

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
        Schema::dropIfExists('sales');
    }
};
