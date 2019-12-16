import {Addresses} from "./addresses";

export interface Room {
  roomId: number;
  hotelId: number;
  ratePerNight: number;
  roomNo: number;
  roomType: string;
  roomDescription: string;
  addressBldgFlat: string;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressPincode: string;
  email: string;
  mobileNo: string;
  primaryPhone: string;
  secondaryPhone: string;
}
