import { BaseModel } from "./baseModel";

export interface User extends BaseModel {

   name: string;
   password: string;
   mailAddress: string;
   taskPoints:number;
   status: string;
   token:string
}