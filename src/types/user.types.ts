export interface Iuser{
    _id: string;
    name: string;
    email: string;
    password?: string; 
    createdAt?: Date;
    updatedAt?: Date;
}