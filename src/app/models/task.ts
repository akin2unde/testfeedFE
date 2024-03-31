import { TaskNotification } from "./task-notification";
import { TaskStatus } from "./task-status";
import { BaseModel } from "./baseModel";


export interface Task extends BaseModel  
{
   name: string;
   description: string;
   project: string;
   actor: string;
   createdBy:string
   projectType: string;
   currentStatus: TaskStatus;
   closeBy:string;
   startAt:Date;
   endAt:Date;
   notifyAt:number; //for developer or manager:e.g 5mins before end date..work after implementation of cron
   taskType: string;
   duration:number;
   hasHistory:boolean;//set immediately an history is added
   taskStatusChangeNotifier:TaskNotification[];
   allowPoint:boolean;
   taskPoint:number
}

