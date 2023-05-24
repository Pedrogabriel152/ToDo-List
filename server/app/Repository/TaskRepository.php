<?php 

namespace App\Repository;

use App\Models\Task;
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
            $tasksClose = Task::where([['status','=',true]])->get();
            $total = count($tasks);

            return [
                'tasks' => $tasks,
                'close' => count($tasksClose),
                'total' => $total
            ];
        });
    }

    public static function updateTask(array $data){
        return DB::transaction(function () use ($data){
            $updateTask = Task::whereId($data['id'])->first();

            if(!$updateTask){
                return [
                    'code' => 404,
                    'message' => 'Tarefa não encontrada'
                ];
            }

            if(array_key_exists('status', $data['task'])){
                $updateTask->status = $data['task']['status'];
            }
            
            $updateTask->descricao = $data['task']['descricao'];
            $updateTask->save();
            return [
                'code' => 200,
                'message' => "Tarefa atualizada com sucesso",
                "task" => $updateTask
            ];
        });
    }

    public static function deleteTask(array $data){
        return DB::transaction(function () use ($data){
            $deleteTask = Task::whereId($data['id'])->first();

            if(!$deleteTask){
                return [
                    'code' => 404,
                    'message' => 'Tarefa não encontrada'
                ];
            }

            $deleteTask->delete();
            return [
                'code' => 200,
                'message' => "Tarefa excluida com sucesso"
            ];
        });
    }

    public static function getTask(int $id){
        $task = Task::whereId($id)->first();

        if(!$task){
            return [
                'code' => 404,
                'message' => 'Tarefa não encontrada'
            ];
        }

        return [
            'code' => 200,
            'message' => "Tarefa encontrada com sucesso",
            "task" => $task
        ];
    }
}