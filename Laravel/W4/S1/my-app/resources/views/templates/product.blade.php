@extends('templates.tpl_default', ['pageId'=>'product'])
@section('css')
<link rel="stylesheet" href="{{ asset('css/product.css') }}">
@endsection

@section('content')
<div class="product">
<h3>Sản phẩm</h3>
<p>Nội dung cho sản phẩm!</p>
</div>
@endsection
@section('js')
<script src="{{ asset('js/product.js') }}"></script>
@endsection