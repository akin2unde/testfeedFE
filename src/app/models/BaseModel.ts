import { ObjectState } from "./ObjectState";

export interface BaseModel{
       Id:string;
       CreatedAt:Date;
       UpdatedAt:Date;
       State:ObjectState;
       BusinessLocation:string;
       Tenant?:string;
       IsChecked:boolean;
       
}