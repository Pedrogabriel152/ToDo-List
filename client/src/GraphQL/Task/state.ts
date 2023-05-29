import { makeVar } from "@apollo/client";
import { IGetTasks } from "../../Interface/IGetTasks";
import { ITasks } from "../../Interface/ITasks";
import { ICreateTask } from "../../Interface/ICreateTask";
import { IDeleteTask } from "../../Interface/IDeleteTask";

export const tasksVar = makeVar<ITasks | null>(null);
export const createTasksVar = makeVar<ICreateTask | null>(null);
export const deleteTasksVar = makeVar<IDeleteTask | null>(null);