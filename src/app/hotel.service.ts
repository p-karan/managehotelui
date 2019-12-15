import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import {Hotel} from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  baseURL = 'http://localhost:7575/hotel';
  constructor(private client: HttpClient) { }

  addHotel(newHotel: Hotel): Observable<Hotel> {
    return this.client.post<Hotel>(this.baseURL, newHotel);
  }

}
