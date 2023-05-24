import { makeVar } from "@apollo/client";
import { IGetTasks } from "../../Interface/IGetTasks";

export const tasksVar = makeVar<IGetTasks | null>(null);