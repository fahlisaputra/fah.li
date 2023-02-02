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
        Schema::create('certification_translations', function (Blueprint $table) {
            $table->bigInteger('certification_id')->unsigned();
            $table->string('locale', 5);
            $table->primary(['certification_id', 'locale']);
            
            $table->string('certification_name');
            $table->string('certification_authority');
            $table->text('certification_description')->nullable();
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
        Schema::dropIfExists('certification_translations');
    }
};
