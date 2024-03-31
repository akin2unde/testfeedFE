import { ObjectState } from "./ObjectState";

export interface BaseModel{
       id:string;
       code:string;
       createdAt:Date;
       updatedAt:Date;
       state:ObjectState;
}