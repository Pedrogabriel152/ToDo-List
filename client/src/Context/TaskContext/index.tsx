import { ReactElement, createContext, useContext } from "react";
import { ITask } from "../../Interface/ITask";

export interface ITaskContext{
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
                createTaskBanco: createTask, 
                deleteTaskBanco: deleteTask, 
                carregando: false
            }} 
        >
            {children}
        </taskContext.Provider>
    );
}

export const useCarrinhoContext = () => {
    return useContext<ITaskContext>(taskContext);
}

export default TaskProvaider;