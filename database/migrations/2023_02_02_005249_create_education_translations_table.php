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
        Schema::create('education_translations', function (Blueprint $table) {
            $table->bigInteger('education_id')->unsigned();
            $table->string('locale', 5);
            $table->primary(['education_id', 'locale']);
            
            $table->string('school_name');
            $table->string('degree');
            $table->text('description')->nullable();
            $table->string('school_location');
            $table->date('start_date');
            $table->date('end_date')->nullable();
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
        Schema::dropIfExists('education_translations');
    }
};
