import { gql } from "@apollo/client";

export const OBTER_TASKS = gql`
    query GetTasks {
        dados{
            close
            total
            tasks{
                id
                status
                descricao
                updated_at
                created_at
            }
        }
    }
`;

export const CREATE_TASK= gql`
    mutation CreateTask($descricao: String!){
        createTask(descricao: $descricao){
            code
            message
            task{
                id
                descricao
                status
            }
        }
    }
`;

export const DELETE_TASK = gql`
    mutation deleteTask($id: ID!){
        deleteTask(id: $id){
                code
                message
            }
        }
`;