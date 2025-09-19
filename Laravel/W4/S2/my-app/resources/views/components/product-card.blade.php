<div class="col-md-3 mb-4">
    <div class="card">
        <img src="{{ asset('imgs/' . $product['image']) }}" class="card-img-top" alt="{{ $product['name'] }}">
        <div class="card-body">
            <h5 class="card-title">{{ $product['name'] }}</h5>
            {{-- Sử dụng @if, @elseif, @else để xử lý logic giá --}}
            @if ($product['discount_percent'] > 0)
                <p class="card-text text-danger">
                    {{ number_format($product['price'] * (1 - $product['discount_percent'] / 100), 0, ',', '.') }}
                    đ
                    <small class="text-muted text-decoration-line-through">
                        {{ number_format($product['price'], 0, ',', '.') }} đ
                    </small>
                </p>
            @else
                <p class="card-text text-primary">
                    {{ number_format($product['price'], 0, ',', '.') }} đ
                </p>
            @endif
            {{-- Sử dụng @if để kiểm tra tình trạng hàng --}}
            @if ($product['in_stock'])
                <span class="badge bg-success">Còn hàng</span>
            @else
                <span class="badge bg-danger">Hết hàng</span>
            @endif
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-primary w-100">Xem chi tiết</a>
        </div>
    </div>
</div>