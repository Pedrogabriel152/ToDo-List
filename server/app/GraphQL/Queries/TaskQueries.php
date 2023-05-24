<?php

namespace App\GraphQL\Queries;

use App\Repository\TaskRepository;

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
        $tasks = TaskRepository::getTasks();
        return $tasks;
    }
}
