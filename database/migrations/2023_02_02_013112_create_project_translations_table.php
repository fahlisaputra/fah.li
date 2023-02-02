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
        Schema::create('project_translations', function (Blueprint $table) {
            $table->bigInteger('project_id')->unsigned();
            $table->string('locale', 5);
            $table->primary(['project_id', 'locale']);

            $table->string('project_name');
            $table->string('client_name')->nullable();
            $table->string('project_location')->nullable();
            $table->text('project_description')->nullable();
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
        Schema::dropIfExists('project_translations');
    }
};
