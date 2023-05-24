<?php 

namespace App\Repository;

use App\Models\Task;
use App\Services\TaskService;
use Illuminate\Support\Facades\DB;

class TaskRepository {
    public static function create(string $descricao) {
        return DB::transaction(function () use ($descricao){
            $newtask = Task::create([
                'descricao' => $descricao,
            ]);
            $newtask->status = false;

            if(!$newtask) {
                return [
                    'code' => 500,
                    'message' => 'Erro ao criar a tarefa'
                ];
            }
            return [
                'code' => 200,
                'message' => 'Tarefa criada com sucesso',
                'task' => $newtask
            ];
        });
    }

    public static function getTasks() {
        return DB::transaction(function (){
            $tasks = Task::orderBy('status', 'asc')->get();

            return $tasks;
        });
    }
}