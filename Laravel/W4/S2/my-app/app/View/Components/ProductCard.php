<?php

namespace App\View\Components;

use Illuminate\View\Component;

class ProductCard extends Component
{

  public $product; // Khai báo thuộc tính public
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($product)
    {
        $this->product = $product;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.product-card');
    }
}
