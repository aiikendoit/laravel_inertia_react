<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




// Route::get('/', function () {
//     return Inertia::render('Home');
// });

// Route::get('/', function () {
//     sleep(2);//progress indicators
//     return Inertia::render('Home', ['name' => 'Admin']);
// });

// Route::get('/about', function() {
//     return inertia('About/About');
// });

// Route::inertia('/', 'Home');
Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');