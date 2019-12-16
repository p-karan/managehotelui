import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import {Hotel} from './hotel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private btnText = new BehaviorSubject<string>( 'Add Hotel');
  private titleText = new BehaviorSubject<string>( 'Add Hotel Details:');
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
  public shareButton = this.btnText.asObservable();
  public shareTitle = this.titleText.asObservable();
  constructor() { }
  updateData(hotel) {
    console.log('data service called');
    console.log('printing hotel object');
    console.log(hotel);
    this.hotelObj.next(hotel);
  }
  updateButton(text) {
    this.btnText.next(text);
  }
  updateTitle(text) {
    this.titleText.next(text);
  }
}
