import {Payment} from "./payment";

export interface Booking {

  bookingId: number;
  bookedFromDate: Date;
  bookedToDate: Date;
  daysBooked: number;
  checkInDateTime: Date;
  checkOutDateTime: Date;
  bookingAmount: number;
  noOfAdults:number;
  noOfChildren: number;
  bookedBy: string;
  bookingStatus: string;
  hotelId: number;
  roomId: number;
  userId: number;
  userName: string;
  paymentSet: Payment;
}
