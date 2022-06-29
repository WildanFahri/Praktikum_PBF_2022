<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post(
    'create-student',
    'App\Http\Controllers\StudentController@createStudent'
);
Route::get(
    'students',
    'App\Http\Controllers\StudentController@studentsListing'
);
Route::get(
    'student/{id}',
    'App\Http\Controllers\StudentController@studentDetail'
);
Route::delete(
    'student/{id}',
    'App\Http\Controllers\StudentController@studentDelete'
);
Route::post(
    'create-dosen',
    'App\Http\Controllers\DosenController@createDosen'
);
Route::get(
    'dosens',
    'App\Http\Controllers\DosenController@dosensListing'
);
Route::get(
    'dosen/{id}',
    'App\Http\Controllers\DosenController@dosenDetail'
);
Route::delete(
    'dosen/{id}',
    'App\Http\Controllers\DosenController@dosenDelete'
);
