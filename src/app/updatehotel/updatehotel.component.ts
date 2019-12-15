import { Component, OnInit } from '@angular/core';
import {Hotel} from '../hotel';
import {Addresses} from '../addresses';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-updatehotel',
  templateUrl: './updatehotel.component.html',
  styleUrls: ['./updatehotel.component.css']
})
export class UpdatehotelComponent implements OnInit {
  idxPos = 0;
  hotelList: Hotel[];
  hotel: Hotel = {
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
  }
  constructor(private service: HotelService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => this.hotelList = data);
  }
  delete(obj) {
    const idxPos = this.hotelList.indexOf(obj);
    this.service.remove(obj).subscribe(data =>
      this.hotelList.splice(idxPos, 1));
  }
}
