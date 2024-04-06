import { TaskStatus } from "./task-status";
import { BaseModel } from "./baseModel";
import { Task } from "./task";


export interface ProjectTask extends BaseModel{
   tasks: string[];
   createdBy: string;
   startAt:Date;
   endAt:Date;
   status: TaskStatus;
   closeBy: string;
   description: string;
   taskObjs: Task[];
   actors:string[];
}

