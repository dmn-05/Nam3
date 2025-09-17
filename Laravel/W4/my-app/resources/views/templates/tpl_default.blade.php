<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Tiêu đề trang</title>
<link rel="stylesheet" href="{{ asset('css/app.css') }}">
@yield('css')
</head>
<body id="{{$pageId}}">
@include('include.header')
<h2>Tiêu đề từ template</h2>
@yield('content')
<script src="{{ asset('js/app.js') }}"></script>
@include('include.footer')
@yield('js')
</body>
</html>