<!DOCTYPE html>
<html>
<head>
<title>Xe {{ $car->id }}</title>
</head>
<body>
<h1>Xe {{ $car->id }}</h1>
<ul>
    <li>Hãng xe: {{ $car->make }}</li>
    <li>Mẫu xe: {{ $car->model }}</li>
    <li>Năm sản xuất: {{ $car->produced_on }}</li>
</ul>
</body>
</html>