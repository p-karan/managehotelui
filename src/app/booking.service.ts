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

}
