import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseURL = 'http://localhost:7575/room/roomType';

  constructor(private client: HttpClient) { }

  findAllRoom(): Observable<Room[]> {
    return this.client.get<Room[]>(this.baseURL);
  }
 /* findById(id: string): Observable<Room> {
    console.log(this.baseURL + id);
    return this.client.get<Room>(this.baseURL + id);
  }*/

}
