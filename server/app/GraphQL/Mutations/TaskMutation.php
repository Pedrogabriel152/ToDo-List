<?php

namespace App\GraphQL\Mutations;

use App\Http\Controllers\API\TaskController;
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
        $resposta = TaskController::create($args['descricao']);
        
        return $resposta;
    }
}
