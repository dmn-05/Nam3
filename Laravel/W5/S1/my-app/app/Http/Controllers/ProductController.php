<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;

class ProductController extends Controller
{
  public static $products = [
    [
      "id" => "1",
      "name" => "TV",
      "description" => "Best TV",
      "image" =>
        "tv.jpg",
      "price" => "2000"
    ],
    [
      "id" => "2",
      "name" => "iPhone",
      "description" => "Best iPhone",
      "image" =>
        "phone.png",
      "price" => "1500"
    ],
    [
      "id" => "3",
      "name" => "Chromecast",
      "description" => "Best Chromecast",
      "image" => "Chromecast.png",
      "price" => "300"
    ],
    [
      "id" => "4",
      "name" => "Glasses",
      "description" => "Best Glasses",
      "image"
      => "Glasses.png",
      "price" => "500"
    ]
  ];
  public function index()
  {
    $viewData = [];
    $viewData["title"] = "products - Online Store";
    $viewData["subtitle"] = "Danh sach san pham.";
    $viewData["product"] = ProductController::$products;
    return view("product.index")->with("viewData", $viewData);
  }
  public function show($id){
    $viewData = [];
    $product = ProductController::$products[$id-1];
    $viewData["product"] = $product;
    $viewData["title"] = $product['name']." - Online Store";
    $viewData["subtitle"] = $product['name']."Thong tin san pham.";
    return view("product.show")->with("viewData", $viewData);
  }
}