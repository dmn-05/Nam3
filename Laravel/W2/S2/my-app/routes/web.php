<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/hello', function(){
    return "web -> xin chao";
});

// Route::RouteMethod($uri, [$ControllerName, $method]);
// RouteMethod là method action của Routes.
// $uri là đường dẫn muốn xử lý.
// $ControllerName là controller chứa logic.
// $method là phương thức trong controller chứa logic để xử lý cho route.
Route::get('/hienthi', [CarController::class, 'HienThi']);

// Route::redirect($uri, $redirectTo, $status)
// $uri là đường dẫn (path) muốn xử lý.
// $redirectTo là đường dẫn (path) muốn chuyển hướng (redirect) đến.
// $status là http status mà các bạn muốn thiết lập, mặc định $status là 302.
Route::redirect('/welcome', '/hello');// nhập welcome nhưng khi enter sẽ thay bằng /hello

// Route::view($uri, $viewName, $data)
// $uri là đường dẫn (path) muốn xử lý.
// $viewName là view muốn render.
// $data data muốn truyền vào view.
// Route::view('/route-view', 'test-view');
Route::view('/route-view', 'test-view');
// Route::view('/route-view', 'test-view', ['name' => 'Đỗ Minh Nhật']);
Route::view('/route-view', 'test-view', ['name' => 'Đỗ Minh Nhật']);

//id có thể để trống nếu có dấu chấm hỏi ở id trong url gán $id giá trị mặc định
//nếu nhập id sẽ lấy giá trị nhập vào
Route::get('/user/{id?}', function ($id = '1') {
    return 'User '.$id;
})->where('id', '[0-9]+'); // chỉ nhập số cho id
Route::get('/user/{name}', function ($name) {
//
})->where('name', '[A-Za-z]+'); // chỉ được nhập chữ cho name

Route::get('/user/{id}/{name}', function ($id, $name) {
//
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']); // có thể kết hợp nhiều điều kiện biến trong where


// Lúc này where sẽ nhận một mảng chứa các ràng buộc cho từng tham số.
// Ngoài ra Laravel có cung cấp sẵn một số phương thức where kèm với regex phổ biến như sau:
// whereNumber($name): tương đương với where($name, '[0-9]+')
// whereAlpha($name): tương đương với where($name, '[a-zA-Z]+')
// whereAlphaNumeric($name): tương đương where($name, '[a-zA-Z0-9]+')
// whereUuid($name): tương đương với where($name, '[\da-fA-F]{8}-[\da-fA-F]{4}-[\da-fA-F]{4}-[\da-fA-F]{4}-[\da-fA-F]{12}')

Route::get('/search/{search}', function ($search) {
    return $search;
})->where('search', '.*'); // http://127.0.0.1:8000/search/car/show mã hóa đc cái '/'