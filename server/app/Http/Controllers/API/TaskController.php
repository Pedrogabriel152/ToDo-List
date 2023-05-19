<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public static function create(string $descricao){
        if(!$descricao){
            return [
                'code' => 402,
                'message' => 'A descrição é obrigatória'
            ];
        }
    }
}
