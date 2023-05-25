import { makeVar } from "@apollo/client";
import { IGetTasks } from "../../Interface/IGetTasks";
import { ITasks } from "../../Interface/ITasks";

export const tasksVar = makeVar<ITasks | null>(null);