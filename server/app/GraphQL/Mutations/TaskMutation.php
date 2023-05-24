<?php

namespace App\GraphQL\Mutations;

use App\Repository\TaskRepository;

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
        $resposta = TaskRepository::create($args['descricao']);
        
        return $resposta;
    }
}
