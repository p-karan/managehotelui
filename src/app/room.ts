import {Addresses} from "./addresses";

export interface Room {
  roomId: number;
  hotelId: number;
  ratePerNight: number;
  roomNo: number;
  roomType: string;
  roomDescription: string;
}
