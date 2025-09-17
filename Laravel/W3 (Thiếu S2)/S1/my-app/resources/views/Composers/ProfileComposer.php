<?php
namespace App\Http\View\Composers;
use Illuminate\View\View;
class ProfileComposer {
    public function compose(View $view) {
    $view->with('title', 'View composer');
}}