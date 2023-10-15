import { ServiceInterface } from "./service";

export interface PaymentInterface{
    ID?:    number;
    Image?: string;
    ServiceID?: number;
    Service?: ServiceInterface;
}