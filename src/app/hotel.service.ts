import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hotel} from './hotel';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  baseURL = 'http://localhost:7575/hotel';
  constructor(private client: HttpClient) { }

  addHotel(newHotel: Hotel): Observable<Hotel> {
    return this.client.post<Hotel>(this.baseURL, newHotel);
  }
  findAll(): Observable<Hotel[]> {
    return this.client.get<Hotel[]>(this.baseURL);
  }

  findById(id: string): Observable<Hotel> {
    console.log(this.baseURL + '/' + id);
    return this.client.get<Hotel>(this.baseURL + '/' + id);
  }

  findAllByCity(city: string): Observable<Hotel[]> {
    return this.client.get<Hotel[]>(this.baseURL + '/' + city);
  }

  getHotelByNameandCity(city: string, hotelname: string): Observable<Hotel> {
    return this.client.get<Hotel>(this.baseURL + '/city/Name/' + city + '/' + hotelname )
  }


  removeHotel(removeHotel: Hotel): Observable<Hotel> {
    const headers = new HttpHeaders().set('content-type' , 'application/json');
    // return this.client.request<Hotel>('Delete', this.baseURL, {headers, body: removeHotel}); /!*When deleting by Loan Object*!/
    return this.client.delete<Hotel>(this.baseURL + '/' + removeHotel.hotelId);
  }

  updateHotel(updateHotel: Hotel): Observable<Hotel> {
    return this.client.put<Hotel>(this.baseURL, updateHotel);
  }

}
