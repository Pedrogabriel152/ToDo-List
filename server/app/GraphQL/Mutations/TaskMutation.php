<?php

namespace App\GraphQL\Mutations;

use App\Models\Task;

final class TaskMutation
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function createTask($_, array $args) {
        $atributos = json_encode($args);

        // dd($atributos);
        $task = new Task();
        $task->descricao = 'Limpar a casa';
        $task->status = false;
        
        return $task;
    }
}
