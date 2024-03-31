import { BaseModel } from "./baseModel";


export interface TaskPointConfig extends BaseModel {
   minPoint: number;
   maxPoint: number;
   status: string;
   deductPoint: number;
   deductPointAfterDuration: number;// deduct (deductPoint) point vlue after e.g 2hrs after the expected completion time
}
