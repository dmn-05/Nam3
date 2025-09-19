@extends('layouts.app') {{-- Kế thừa từ file layout app.blade.php --}}
@section('title', 'Danh sách sản phẩm') {{-- Định nghĩa nội dung cho section 'title' --}}
@section('content') {{-- Bắt đầu định nghĩa nội dung cho section 'content' --}}
    <h2 class="mb-4">Sản phẩm nổi bật</h2>
    <div class="row">
        {{-- Kiểm tra xem danh sách sản phẩm có rỗng không --}}
        @forelse ($products as $product)
          {{-- @include('products._product_card', ['product' => $product]) --}}
          <x-product-card :product="$product"/>  {{-- sử dụng component truyền dữ liệu--}}
        @empty
            <div class="col-12">
                <p class="text-center">Chưa có sản phẩm nào.</p>
            </div>
        @endforelse
    </div>
@endsection {{-- Kết thúc section 'content' --}}
