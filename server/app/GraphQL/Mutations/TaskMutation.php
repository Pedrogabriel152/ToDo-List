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
        $response = TaskRepository::create($args['descricao']);
        return $response;
    }

    public function updateTask($_, array $args){
        $response = TaskRepository::updateTask($args);
        return $response;
    }

    public function deleteTask($_, array $args){
        $response = TaskRepository::deleteTask($args);
        return $response;
    }
}
