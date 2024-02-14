import { BaseModel } from "./BaseModel";

export interface User extends BaseModel {
        Name :string;
        MailAddress :string;
        Active :boolean;
}