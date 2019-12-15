import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hotel} from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  baseURL = 'http://localhost:7575/hotel';
  constructor(private client: HttpClient) { }

  findAll(): Observable<Hotel[]> {
    return this.client.get<Hotel[]>(this.baseURL);
  }
  findById(id: string): Observable<Hotel> {
    console.log(this.baseURL + '/' + id);
    return this.client.get<Hotel>(this.baseURL + '/' + id);
  }

  add(addHotel: Hotel): Observable<Hotel> {
    return this.client.post<Hotel>(this.baseURL, addHotel);
  }

  /*remove(removeHotel: Hotel): Observable<Hotel> {
    const headers = new HttpHeaders().set('content-type' , 'application/json');
    // return this.client.request<Hotel>('Delete', this.baseURL, {headers, body: removeHotel}); /!*When deleting by Loan Object*!/
    return this.client.delete<Hotel>(this.baseURL + '/' + removeHotel.hotelId); /!*When deleting by Loan ID*!/
  }

  update(updateHotel: Hotel): Observable<Hotel> {
    return this.client.put<Hotel>(this.baseURL, updateHotel);
  }
*/
}
