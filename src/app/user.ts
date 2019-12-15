import {Addresses} from "./addresses";

export interface User {
  /*userId: number;*/
  userName: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  role: string;
  addresses: Addresses;
}
