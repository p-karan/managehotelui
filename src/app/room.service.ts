import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from './room';
import {Hotel} from "./hotel";
import {Rooms} from "./rooms";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseURL = 'http://localhost:7575/room';

  constructor(private client: HttpClient) { }

  findAllRoom(): Observable<Room[]> {
    return this.client.get<Room[]>(this.baseURL + '/roomType');
  }

  addRoom(newRoom: Rooms): Observable<Room> {
    return this.client.post<Room>(this.baseURL, newRoom);
  }
 /* findById(id: string): Observable<Room> {
    console.log(this.baseURL + id);
    return this.client.get<Room>(this.baseURL + id);
  }*/

}
