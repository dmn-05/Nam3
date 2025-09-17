<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::share('name', 'Minh Chiến'); // Bây giờ tất cả các file view đều có thể gọi $key với giá trị là value
        View::composer('Demo.demo-view', function ($view) {
            // nó sẽ lắng nghe khi nào demo-view đc gọi trên url nó sẽ render title ra
            $view->with('title', 'View composer'); 
        });
        View::composer('profile', function ($view) {
            // nó sẽ lắng nghe khi nào demo-view đc gọi trên url nó sẽ render title ra
            $view->with('title', 'View composer'); 
        });
    }
}