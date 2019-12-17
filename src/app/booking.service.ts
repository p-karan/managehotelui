import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Booking} from './booking';
import {Hotel} from "./hotel";


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseURL = 'http://localhost:7575/booking/';

  constructor(private client: HttpClient) { }

  addBooking(newBooking: Booking): Observable<Booking> {
    return this.client.post<Booking>(this.baseURL, newBooking);
  }

  findAllByHotelId(hotelId: string): Observable<Booking[]> {
    console.log(this.baseURL + 'hotel/' + hotelId);
    return this.client.get<Booking[]>(this.baseURL + 'hotel/' + hotelId);
  }

  findAllBookingBySpecificDate(bookingDate: Date): Observable<Booking[]> {
    console.log(this.baseURL + 'specificDate/' + bookingDate + '/'+ bookingDate);
    return this.client.get<Booking[]>(this.baseURL + 'specificDate/' + bookingDate + '/'+ bookingDate);
  }

  /*findAll(): Observable<Hotel[]> {
    return this.client.get<Hotel[]>(this.baseURL);
  }



  findAllByCity(city: string): Observable<Hotel[]> {
    return this.client.get<Hotel[]>(this.baseURL + '/' + city);
  }*/

}
