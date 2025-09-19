@extends('templates.tpl_default', ['pageId'=>'news'])
@section('css')
<link rel="stylesheet" href="{{ asset('css/news.css') }}">
@endsection

@section('content')
<div class="news">
<h3>Tin trong ngày</h3>
<p>Nội dung cho tin tức!</p>
</div>
@endsection
@section('js')
<script src="{{ asset('js/news.js') }}"></script>
@endsection