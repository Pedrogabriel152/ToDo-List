import { ReactElement, createContext, useContext } from "react";
import { ITask } from "../../Interface/ITask";
import { IGetTasks } from "../../Interface/IGetTasks";
import { useReactiveVar } from "@apollo/client";
import { tasksVar } from "../../GraphQL/Task/state";
import { useCreateTask, useDeleteTask, useTasks } from "../../GraphQL/Task/hooks";
import { ITasks } from "../../Interface/ITasks";

export interface ITaskContext{
    tasks?: ITasks
    createTaskBanco: (descricao: string) => void
    deleteTaskBanco: (item: ITask) => void
    carregando: boolean
}

export const taskContext = createContext<ITaskContext>({
    createTaskBanco: () => null,
    deleteTaskBanco: () => null,
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

    return (
        <taskContext.Provider 
            value={{
                tasks: data? data : tasks,
                createTaskBanco: createTask, 
                deleteTaskBanco: deleteTask, 
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