<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
  public function index()
  {
    $products = [
      [
        'id' => 1,
        'name' => 'iPhone 15 Pro Max',
        'price' => 34990000,
        'in_stock' => true,
        'discount_percent' => 10, // Giảm 10%
        'image' => 'IPhone15promax.jpg'
      ],
      [
        'id' => 2,
        'name' => 'Samsung Galaxy S24',
        'price' => 33990000,
        'in_stock' => true,
        'discount_percent' => 0, // Không giảm giá
        'image' => 'SamSungS24.jpg'
      ],
      [
        'id' => 3,
        'name' => 'Xiaomi 14',
        'price' => 22990000,
        'in_stock' => false, // Hết hàng
        'discount_percent' => 5,
        'image' => 'Xiaomi14.jpg'
      ],
      [
        'id' => 4,
        'name' => 'Oppo Find N3',
        'price' => 44990000,
        'in_stock' => true,
        'discount_percent' => 15,
        'image' => 'OppoFindN3.jpg'
      ]
    ];
    // Truyền biến $products sang view 'products.index'
    return view('products.index', ['products' => $products]);
  }
}