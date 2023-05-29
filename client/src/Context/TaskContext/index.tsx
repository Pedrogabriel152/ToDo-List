import { ReactElement, createContext, useContext } from "react";
import { ITask } from "../../Interface/ITask";
import { IGetTasks } from "../../Interface/IGetTasks";
import { useReactiveVar } from "@apollo/client";
import { tasksVar } from "../../GraphQL/Task/state";
import { useCreateTask, useDeleteTask, useTasks, useUpdateTask } from "../../GraphQL/Task/hooks";
import { ITasks } from "../../Interface/ITasks";

export interface ITaskContext{
    tasks?: ITasks
    createTaskBanco: (descricao: string) => void
    deleteTaskBanco: (item: ITask) => void
    editTask: (item: ITask) => void
    carregando: boolean
}

export const taskContext = createContext<ITaskContext>({
    createTaskBanco: () => null,
    deleteTaskBanco: () => null,
    editTask: () => null,
    carregando: false
});

interface TaskProvaiderProps {
    children: ReactElement
}

const TaskProvaider = ({children}:TaskProvaiderProps) => {
    const tasks: ITasks = {
        close: 0,
        tasks: [],
        total:  0
        
    }

    const {loading: loadTasks} = useTasks();

    const data = useReactiveVar(tasksVar);

    const [adicionaTask, { loading: loadAdicona}] = useCreateTask();
    const [removeTask] = useDeleteTask();
    const [updateTask] = useUpdateTask();
    // const [removeItem] = useRemoveItem();

    const createTask = (descricao: string) => {

        adicionaTask({
            variables: {
                descricao: descricao
            }
        })
    }

    const deleteTask = (item: ITask) => {
        removeTask({
            variables: {
                id: item.id
            }
        })
    }

    const editTask = (task: ITask) => {
        updateTask({
            variables: {
                id: task.id,
                task: {
                    descricao: task.descricao,
                    status: task.status
                }
            }
        })
    }

    return (
        <taskContext.Provider 
            value={{
                tasks: data? data : tasks,
                createTaskBanco: createTask, 
                deleteTaskBanco: deleteTask, 
                editTask: editTask,
                carregando: loadTasks 
            }} 
        >
            {children}
        </taskContext.Provider>
    );
}

export const useTaskContext = () => {
    return useContext<ITaskContext>(taskContext);
}

export default TaskProvaider;