<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\passportAuthController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\LaborDataController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\UserController;


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



//-----------------------------------------------------------------------------------
//Rutas de Brand
Route::get('/brands', [BrandController::class, 'index']); //Mostrar todo

Route::post('/brand', [BrandController::class, 'store']); //Ingresar un registro

Route::get('/brand/{id}', [BrandController::class, 'show']); //Mostrar un solo registro

Route::delete('/brand/{id}', [BrandController::class, 'destroy']); //Borrar un registro por Id

Route::put('/brand/{id}', [BrandController::class, 'update']);  //Modificar un registro


//---------------------------------------------------------------------------------------
//Rutas de Category
Route::get('/category_index', [CategoryController::class, 'index']); //Mostrar todo

Route::post('/store_category', [CategoryController::class, 'store']); //Ingresar un registro

Route::get('/show_category/{id}', [CategoryController::class, 'show']); //Mostrar un solo registro

Route::delete('/delete_category/{id}', [CategoryController::class, 'destroy']); //Borrar un registro por Id

Route::put('/update_category/{id}', [CategoryController::class, 'update']);  //Modificar un registro

//---------------------------------------------------------------------------------------
//Rutas de LaborData
Route::get('/laborData_index', [LaborDataController::class, 'index']); //Mostrar todo

Route::post('/store_laborData', [LaborDataController::class, 'store']); //Ingresar un registro

Route::get('/show_laborData/{id}', [LaborDataController::class, 'show']); //Mostrar un solo registro

Route::delete('/delete_laborData/{id}', [LaborDataController::class, 'destroy']); //Borrar un registro por Id

Route::put('/update_laborData/{id}', [LaborDataController::class, 'update']);  //Modificar un registro

//---------------------------------------------------------------------------------------
//Rutas de Car
Route::get('/cars', [CarController::class, 'index']); //Mostrar todo

Route::post('/car', [CarController::class, 'store']); //Ingresar un registro

Route::get('/car/{id}', [CarController::class, 'show']); //Mostrar un solo registro

Route::delete('/car/{id}', [CarController::class, 'destroy']); //Borrar un registro por Id

Route::put('/car/{id}', [CarController::class, 'update']);  //Modificar un registro

//---------------------------------------------------------------------------------------
//Rutas de Customer
Route::get('/customer_index', [CustomerController::class, 'index']); //Mostrar todo

Route::post('/store_customer', [CustomerController::class, 'store']); //Ingresar un registro

Route::get('/show_customer/{id}', [CustomerController::class, 'show']); //Mostrar un solo registro

Route::delete('/delete_customer/{id}', [CustomerController::class, 'destroy']); //Borrar un registro por Id

Route::put('/update_customer/{id}', [CustomerController::class, 'update']);  //Modificar un registro

//---------------------------------------------------------------------------------------
//Rutas de seller
Route::get('/seller_index', [SellerController::class, 'index']); //Mostrar todo

Route::post('/store_seller', [SellerController::class, 'store']); //Ingresar un registro

Route::get('/show_seller/{id}', [SellerController::class, 'show']); //Mostrar un solo registro

Route::delete('/delete_seller/{id}', [SellerController::class, 'destroy']); //Borrar un registro por Id

Route::put('/update_seller/{id}', [SellerController::class, 'update']);  //Modificar un regi

//---------------------------------------------------------------------------------------
//Rutas de sales
Route::get('/sale_index', [SalesController::class, 'index']); //Mostrar todo

Route::post('/store_sale', [SalesController::class, 'store']); //Ingresar un registro

Route::get('/show_sale/{id}', [SalesController::class, 'show']); //Mostrar un solo registro

Route::delete('/delete_sale/{id}', [SalesController::class, 'destroy']); //Borrar un registro por Id

Route::put('/update_sale/{id}', [SalesController::class, 'update']);  //Modificar un registro

//PassportAuth

Route::post('/register',[passportAuthController::class, 'register']);
Route::post('/login',[passportAuthController::class, 'login']);

Route::group(['prefix' => 'users', 'middleware' => 'CORS'], function ($router) {
    Route::post('/register', [UserController::class, 'register'])->name('register.user');
    Route::post('/login', [UserController::class, 'login'])->name('login.user');
    Route::get('/view-profile', [UserController::class, 'viewProfile'])->name('profile.user');
    Route::get('/logout', [UserController::class, 'logout'])->name('logout.user');
    });