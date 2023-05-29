import { ITask } from "./ITask";

export interface ICardTasks {
    tasks: ITask[]
    deleteTask(task: ITask): void
    editTask(task: ITask, acao: string): void
}