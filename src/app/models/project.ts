import { BaseModel } from "./BaseModel";


export interface Project extends BaseModel {
 
   name: string;
   createdBy: string;
   status: string;
   projectType: string;
   description: string;

}
