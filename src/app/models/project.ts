import { BaseModel } from "./baseModel";


export interface Project extends BaseModel {
 
   name: string;
   createdBy: string;
   status: string;
   projectType: string;
   description: string;

}
