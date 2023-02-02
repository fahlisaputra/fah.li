<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class All extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('experience_translations', function (Blueprint $table) {
            $table->foreign('experience_id')->references('id')->on('experiences')->cascadeOnDelete();
        });

        Schema::table('education_translations', function (Blueprint $table) {
            $table->foreign('education_id')->references('id')->on('education')->cascadeOnDelete();
        });

        Schema::table('certification_translations', function (Blueprint $table) {
            $table->foreign('certification_id')->references('id')->on('certifications')->cascadeOnDelete();
        });

        Schema::table('achievement_translations', function (Blueprint $table) {
            $table->foreign('achievement_id')->references('id')->on('achievements')->cascadeOnDelete();
        });

        Schema::table('certification_images', function (Blueprint $table) {
            $table->foreign('certification_id')->references('id')->on('certifications')->cascadeOnDelete();
        });

        Schema::table('achievement_images', function (Blueprint $table) {
            $table->foreign('achievement_id')->references('id')->on('achievements')->cascadeOnDelete();
        });

        Schema::table('activity_translations', function (Blueprint $table) {
            $table->foreign('activity_id')->references('id')->on('activities')->cascadeOnDelete();
        });

        Schema::table('project_stacks', function (Blueprint $table) {
            $table->foreign('project_id')->references('id')->on('projects')->cascadeOnDelete();
            $table->foreign('stack_id')->references('id')->on('tech_stacks')->cascadeOnDelete();
        });

        Schema::table('project_translations', function (Blueprint $table) {
            $table->foreign('project_id')->references('id')->on('projects')->cascadeOnDelete();
        });

        Schema::table('post_tags', function (Blueprint $table) {
            $table->foreign('post_id')->references('id')->on('posts')->cascadeOnDelete();
            $table->foreign('tag_id')->references('id')->on('tags')->cascadeOnDelete();
        });

        Schema::table('post_translations', function (Blueprint $table) {
            $table->foreign('post_id')->references('id')->on('posts')->cascadeOnDelete();
        });

        Schema::table('post_comments', function (Blueprint $table) {
            $table->foreign('post_id')->references('id')->on('posts')->cascadeOnDelete();
            $table->foreign('parent_id')->references('id')->on('post_comments')->cascadeOnDelete();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });

        Schema::table('communities', function (Blueprint $table) {
            $table->foreign('parent_id')->references('id')->on('communities')->cascadeOnDelete();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });

    }
}
