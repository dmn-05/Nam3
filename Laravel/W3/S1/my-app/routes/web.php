<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;


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

Route::get('/user', function () {
    return view('greeting', ['name' => 'James']);
});

// Các view cũng có thể được lồng trong các thư mục con của thư mục resources/views . Ký hiệu dấu chấu
// (.) được sử dụng để tham chiếu các view lồng nhau.
// Ví dụ: Nếu view demo-view.blade.php bên trên nằm trong thư mục con demo của views (views/demo).
// File routes/web.php:
Route::get('demo-view', function() {
    return view('Demo.demo-view');
})->name('demo-view');


// Trong một số trường hợp, nếu muốn render view tồn tại đầu tiên trong danh sách view thì có thể sử dụng
// phương thức first trong View object với cú pháp như sau:
//use Illuminate\Support\Facades\View;
// View::first($views, $data);
Route::get('test-view-first', function() {
    return View::first(['no_exist', 'Demo.demo-view']);
})->name('test-view-first');
// Ở đây global helper function view sẽ trả về một object nên có thể tham chiếu tiếp đến method first.
// Laravel sẽ lần lượt kiểm tra các view này từ trái qua phải, nếu view nào không tồn tại thì nó sẽ bỏ qua. View
// no_exist không tồn tại nên bỏ qua, với đường dẫn http://localhost:8000/demo-view thì chúng ta
// nhận được view demo-view.

//Determining If A View Exists
Route::get('view-exist', function () {
    // không tồn tại vì nó không có demo-view chỉ có thể dùng Demo.demo-view
    if (View::exists('demo-view')) { 
return 'View demo ton tai!';
} else {
return 'View demo khong ton tai!';
}
})->name('view-exist');

/////////////////////////////////////////
//Passing Data To Views
Route::get('demo-view', function() {
return view('Demo.demo-view', ['city'=>'Ho Chi Minh']);
})->name('demo-view');

/////////////////////////////////////////
Route::get('/profile', function () {
    return view('profile');
});