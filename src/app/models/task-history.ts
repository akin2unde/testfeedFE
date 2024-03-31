import { Task } from "./task";
import { BaseModel } from "./baseModel";


export interface TaskHistory extends BaseModel  {
  
   task: string;
   actor: string;
   taskStatus: string;
   description: string;
   taskObj?:Task;
}
