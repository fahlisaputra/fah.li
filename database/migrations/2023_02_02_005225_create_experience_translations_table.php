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
        Schema::create('experience_translations', function (Blueprint $table) {
            $table->bigInteger('experience_id')->unsigned();
            $table->string('locale', 5);
            $table->primary(['experience_id', 'locale']);
            
            $table->string('company_name');
            $table->string('job_title');
            $table->text('job_description');
            $table->string('job_location');
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
        Schema::dropIfExists('experience_translations');
    }
};
