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
        Schema::create('achievement_translations', function (Blueprint $table) {
            $table->bigInteger('achievement_id')->unsigned();
            $table->string('locale', 5);
            $table->primary(['achievement_id', 'locale']);
            
            $table->string('achievement_name');
            $table->string('achievement_authority');
            $table->text('achievement_description')->nullable();
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
        Schema::dropIfExists('achievement_translations');
    }
};
