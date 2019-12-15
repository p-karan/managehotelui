import { Component, OnInit } from '@angular/core';
import {Hotel} from '../hotel';
import {Addresses} from '../addresses';
import {HotelService} from '../hotel.service';
import { DataService} from '../data.service';
import {Router} from '@angular/router';

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
  };
  constructor(private service: HotelService, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => this.hotelList = data);
  }
  delete(obj) {
    const idxPos = this.hotelList.indexOf(obj);
    this.service.removeHotel(obj).subscribe(data =>
      this.hotelList.splice(idxPos, 1));
  }

  edit(obj) {
    this.idxPos = this.hotelList.indexOf(obj);
    this.hotel = obj;
    console.log(this.hotel);
    this.data.updateData(this.hotel);
    this.router.navigate(['/addhotel']);
    this.data.updateButton('Update Hotel');
    this.data.updateTitle('Update Hotel Details:');
  }
}
