@extends('layouts.app')
@section('title', $viewData["title"])
@section ('content')
<div class="row">
    <div class="col-md-6 col-lg-4 mb 2">
        <img src="{{ asset('/imgs/drone.png') }}" class="img-fluid ronded">
    </div>
    <div class="col-md-6 col-lg-4 mb 2">
        <img src="{{ asset('/imgs/game.png') }}" class="img-fluid ronded">
    </div><div class="col-md-6 col-lg-4 mb 2">
        <img src="{{ asset('/imgs/philips.webp') }}" class="img-fluid ronded">
    </div>
</div>
@endsection