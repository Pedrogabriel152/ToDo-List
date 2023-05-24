import { useMutation, useQuery } from "@apollo/client";
import { IGetTasks } from "../../Interface/IGetTasks";
import { OBTER_TASKS } from "./queries";
import { tasksVar } from "./state";

export const useTasks = () => {
    return useQuery<{dados: IGetTasks}>(OBTER_TASKS,{
        onCompleted(data) {
            if(data?.dados){
                console.log(data)
                tasksVar(data?.dados)
            }
        },
    });
};

// export const useAdicionaItem = () => {
//     return useMutation<{adicionarItem: boolean}>(ADICIONA_ITEM_CARRINHO,{
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