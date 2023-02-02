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
        Schema::create('activity_translations', function (Blueprint $table) {
            $table->bigInteger('activity_id')->unsigned();
            $table->string('locale', 5);
            $table->primary(['activity_id', 'locale']);
            
            $table->string('activity_name');
            $table->string('activity_authority')->nullable();
            $table->text('activity_description')->nullable();
            $table->string('activity_location')->nullable();           
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
        Schema::dropIfExists('activity_translations');
    }
};
