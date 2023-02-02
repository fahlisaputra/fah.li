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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->integer('year');
            $table->string('slug');
            $table->text('thumbnail');
            $table->string('project_url_web')->nullable();
            $table->string('project_url_android')->nullable();
            $table->string('project_url_desktop')->nullable();
            $table->string('github_repository')->nullable();
            $table->string('client_url')->nullable();
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
        Schema::dropIfExists('projects');
    }
};
