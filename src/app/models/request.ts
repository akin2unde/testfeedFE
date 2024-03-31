import { BaseModel } from "./baseModel";
export interface Request extends BaseModel {
   project: string;
   createdBy: string;
   status: string;
   priority: string;
   description: string;
   solution: string;
   task: string;
}
