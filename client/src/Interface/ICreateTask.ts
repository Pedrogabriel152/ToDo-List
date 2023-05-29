import { ITask } from "./ITask"

export interface ICreateTask{
    code: number
    message: string
    task?: ITask
}