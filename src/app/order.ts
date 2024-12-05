import { ItemsOrder } from "./ItemsOrder";
import { User } from "./user";

export interface Order {
    id?:number,
    date?:string;
    user?:User;
    items:ItemsOrder[];

}