<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Car;

class CarController extends Controller{
    public function HienThi(){
        return "Hãng SX: Mercedes; Mẫu xe: GLS; Năm sản xuất: 2021";
    }
}