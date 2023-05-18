<?php

namespace App\GraphQL\Queries;

use App\Models\Task;

final class TaskQueries
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function getTasks($_, array $args){
        $task = new Task();
        $task->descricao = 'Limpar a casa';
        $task->status = false;
        
        return [
            $task,
        ];
    }
}
