import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Searchresult} from './searchresult';

@Injectable({
  providedIn: 'root'
})
export class SearchresultService {

  baseURL = 'http://localhost:7575/hotel/';
  constructor(private client: HttpClient) { }

  searchByCityDateRange(city: string, fromDate: Date, toDate: Date): Observable<Searchresult[]> {
    return this.client.get<Searchresult[]>(this.baseURL + city + '/' + fromDate + '/' + toDate);
  }

}
