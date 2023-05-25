import { ReactElement, createContext, useContext } from "react";
import { ITask } from "../../Interface/ITask";
import { IGetTasks } from "../../Interface/IGetTasks";
import { useReactiveVar } from "@apollo/client";
import { tasksVar } from "../../GraphQL/Task/state";
import { useTasks } from "../../GraphQL/Task/hooks";
import { ITasks } from "../../Interface/ITasks";

export interface ITaskContext{
    tasks?: ITasks
    createTaskBanco: (item: ITask) => void
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

    // const [adicionaItem, { loading: loadAdicona}] = useAdicionaItem();
    // const [removeItem] = useRemoveItem();

    const createTask = (item: ITask) => {
        // const newItem: ITask = {
        //     livroId: item.livro.id,
        //     opcaoCompraId: item.opcaoCompra.id,
        //     quantidade: item.quantidade
        // }

        // console.log('New item',newItem)

        // adicionaItem({
        //     variables: {
        //         item: newItem
        //     }
        // })
        console.log(`[CarrinhoProvaider] - adicionarItemCarrinho`, item)
    }

    const deleteTask = (item: ITask) => {
        // const newItem: ITask = {
        //     livroId: item.livro.id,
        //     opcaoCompraId: item.opcaoCompra.id,
        //     quantidade: item.quantidade
        // }

        // removeItem({
        //     variables: {
        //         item: newItem
        //     }
        // })
        console.log(`[CarrinhoProvaider] - removerItemCarrinho`, item)
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