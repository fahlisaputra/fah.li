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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('slug');
            $table->text('thumbnail');
            $table->bigInteger('views')->default(0);
            $table->bigInteger('thumbs_up')->default(0);
            $table->bigInteger('likes')->default(0);
            $table->bigInteger('claps')->default(0);
            $table->bigInteger('confetti')->default(0);
            $table->bigInteger('shares')->default(0);
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
        Schema::dropIfExists('posts');
    }
};
