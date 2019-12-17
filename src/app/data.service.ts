import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import {Hotel} from './hotel';
import {Searchresult} from './searchresult';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private btnText = new BehaviorSubject<string>( 'Add Hotel');
  private tDate = new BehaviorSubject<Date>(new Date());
  private fDate = new BehaviorSubject<Date>(new Date());
  private statusMessage = new BehaviorSubject<string>( '');
  private titleText = new BehaviorSubject<string>( 'Add Hotel Details:');
  private currentStatus = new BehaviorSubject<string>( '');
  private searchObj = new BehaviorSubject<Searchresult>(
     {
    roomId: 0,
    roomType: '',
    ratePerNight: 0,
    roomDescription: '',
    hotelId: 0,
    hotelName: '',
    hotelDescription: '',
    hotelRating: 0,
    discount: 0,
    hotelOperationalStatus: '',
    addressBldgFlat: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressPincode: '',
    email: '',
    mobileNo: '',
    primaryPhone: '',
    secondaryPhone: ''
  });
  private hotelObj = new BehaviorSubject<Hotel>({
  hotelId: 0,
    hotelName: '',
    addresses: {
      addressBldgFlat: '',
      addressStreet: '',
      addressCity: '',
      addressState: '',
      addressPincode: '',
      email: '',
      mobileNo: '',
      primaryPhone: '',
      secondaryPhone: '',
    },
    rating: 0,
    hotelDescription: '',
    discount: 0,
    hotelOperationalStatus: ''
  });
  public share = this.hotelObj.asObservable();
  public shareToDate = this.tDate.asObservable();
  public shareFromDate = this.fDate.asObservable();
  public statusCheckService = this.currentStatus.asObservable();
  public shareButton = this.btnText.asObservable();
  public shareStatusMessage = this.statusMessage.asObservable();
  public shareTitle = this.titleText.asObservable();
  public shareSearchResult = this.searchObj.asObservable();
  constructor() { }
  updateData(hotel) {
    console.log('data service called');
    console.log('printing hotel object');
    console.log(hotel);
    this.hotelObj.next(hotel);
  }
  updateSearchResult(searchResult) {
    console.log('data service for searchResult called');
    console.log('printing searchResult object');
    console.log(searchResult);
    this.searchObj.next(searchResult);
  }
  updateButton(text) {
    this.btnText.next(text);
  }
  updateTitle(text) {
    this.titleText.next(text);
  }
  updateStatusMessage(text){
    this.statusMessage.next(text);
  }
  updateStatus(text) {
    this.currentStatus.next(text);
  }
  updateToDate(tdate) {
    this.tDate.next(tdate);
  }
  updateFromDate(fdate) {
    this.fDate.next(fdate);
  }
}
