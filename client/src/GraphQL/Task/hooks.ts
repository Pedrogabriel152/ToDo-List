import { useMutation, useQuery } from "@apollo/client";
import { IGetTasks } from "../../Interface/IGetTasks";
import { CREATE_TASK, DELETE_TASK, OBTER_TASKS } from "./queries";
import { createTasksVar, deleteTasksVar, tasksVar } from "./state";
import { ITask } from "../../Interface/ITask";
import { ITasks } from "../../Interface/ITasks";
import { ICreateTask } from "../../Interface/ICreateTask";
import { IDeleteTask } from "../../Interface/IDeleteTask";

export const useTasks = () => {
    return useQuery<{dados: ITasks}>(OBTER_TASKS,{
        onCompleted(data) {
            if(data?.dados){
                console.log(data.dados)
                tasksVar(data?.dados)
            }
        },
    });
};

export const useCreateTask = () => {
    return useMutation<{createTask: ICreateTask}>(CREATE_TASK,{
        onCompleted(data) {
            if(data){
                createTasksVar(data?.createTask)
            }
        },
        refetchQueries: [
            'GetTasks'
        ]
    });
};

export const useDeleteTask = () => {
    return useMutation<{deleteTask: IDeleteTask}>(DELETE_TASK,{
        onCompleted(data) {
            if(data){
                deleteTasksVar(data?.deleteTask)
            }
        },
        refetchQueries: [
            'GetTasks'
        ]
    });
};

// export const useRemoveItem = () => {
//     return useMutation<{adicionarItem: boolean}>(REMOVE_ITEM_CARRINHO,{
//         onCompleted(data) {
//             if(data?.adicionarItem){
//                 adicionaCarrinhoVar(data?.adicionarItem)
//             }
//         },
//         refetchQueries: [
//             'ObeterCarrinho'
//         ]
//     });
// };