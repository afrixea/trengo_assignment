<?php

use App\Http\Controllers\RegistrationApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); 
Route::prefix('Reg')->group(function () {
    Route::get('/get_registered', [RegistrationApiController::class, 'index']);
    Route::post('/register', [RegistrationApiController::class, 'store']);
    Route::put('/update_account/{acc}', [RegistrationApiController::class, 'update']);
    Route::delete('/delete_account/{acc}', [RegistrationApiController::class, 'destroy']);
});
