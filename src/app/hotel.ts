import {Addresses} from './addresses';

export interface Hotel {
  hotelId: number;
  hotelName: string;
  addresses: Addresses;
  rating: number;
  hotelDescription: string;
  discount: number;
  hotelOperationalStatus: string;
}
