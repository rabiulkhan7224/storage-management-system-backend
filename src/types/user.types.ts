import { Types } from "mongoose";

export interface Iuser{
    _id: Types.ObjectId;
    name: string;
    email: string;
    password?: string; 
    createdAt?: Date;
    updatedAt?: Date;
}