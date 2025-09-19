<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initialscale=1.0">
    <title>@yield('title', 'Cửa hàng của tôi')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min
.css" rel="stylesheet">
    @stack('styles')
</head>

<body>
    <header class="bg-primary text-white text-center p-3">
        <h1>Cửa Hàng ABC</h1>
    </header>
    <main class="container mt-4">
        @yield('content') </main>
    <footer class="bg-dark text-white text-center p-3 mt-5">
        <p>&copy; 2025 Bản quyền thuộc về Cửa Hàng ABC.</p>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    @stack('scripts')
</body>

</html>
