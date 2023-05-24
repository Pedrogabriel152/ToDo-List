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