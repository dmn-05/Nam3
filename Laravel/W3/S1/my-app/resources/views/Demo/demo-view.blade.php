<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }}</title>
</head>

<body>
    <h1>Truyen du lieu vao view trong Laravel!</h1>
    <h2><?= $name ?></h2>
    {{-- <?= $name ?> hoặc --}}
    <h3>{{ $city }}</h3>
    {{-- {{ $city }} --}}
    <h4>{{ $title }}</h4>

</body>

</html>
