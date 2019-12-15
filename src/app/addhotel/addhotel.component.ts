import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelService} from '../hotel.service';
import {Router} from '@angular/router';
import { DataService} from '../data.service';
import {Hotel} from '../hotel';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  addHotelForm: FormGroup;
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
  btnText = 'Add Hotel';
  titleText = 'Add Hotel Details:';
  constructor(private service: HotelService, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.share.subscribe(receiveUpdate => this.hotel = receiveUpdate);
    this.data.shareButton.subscribe(updateButton => this.btnText = updateButton);
    this.data.shareTitle.subscribe(updateTitle => this.titleText = updateTitle);
    console.log('inside onInit');
    console.log(this.hotel.hotelName);
    if (this.hotel.hotelName !== '') {
      this.addHotelForm = new FormGroup({
          hotelId: new FormControl(this.hotel.hotelId),
          hotelName: new FormControl(this.hotel.hotelName, Validators.required),
          rating: new FormControl(this.hotel.rating, Validators.required),

          discount: new FormControl(this.hotel.discount, Validators.required),
          hotelOperationalStatus: new FormControl(this.hotel.hotelOperationalStatus),
          hotelDescription: new FormControl(this.hotel.hotelDescription, Validators.required),
          addresses: new FormGroup(
            {
              addressBldgFlat: new FormControl(this.hotel.addresses.addressBldgFlat, Validators.required),
              addressStreet: new FormControl(this.hotel.addresses.addressStreet, Validators.required),
              addressCity: new FormControl(this.hotel.addresses.addressCity, Validators.required),
              addressState: new FormControl(this.hotel.addresses.addressState, Validators.required),
              addressPincode: new FormControl(this.hotel.addresses.addressPincode, [Validators.required, Validators.pattern('^[0-9]*$')]),

              mobileNo: new FormControl(this.hotel.addresses.mobileNo, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              primaryPhone: new FormControl(this.hotel.addresses.primaryPhone, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              secondaryPhone: new FormControl(this.hotel.addresses.secondaryPhone, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              email: new FormControl(this.hotel.addresses.email, Validators.required)
            }
          )
        }
      );
    } else {
      this.addHotelForm = new FormGroup({
          hotelName: new FormControl('', Validators.required),
          rating: new FormControl('', Validators.required),

          discount: new FormControl('', Validators.required),
          hotelOperationalStatus: new FormControl(null),
          hotelDescription: new FormControl('', Validators.required),
          addresses: new FormGroup(
            {
              addressBldgFlat: new FormControl('', Validators.required),
              addressStreet: new FormControl('', Validators.required),
              addressCity: new FormControl('', Validators.required),
              addressState: new FormControl('', Validators.required),
              addressPincode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),

              mobileNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              primaryPhone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              secondaryPhone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              email: new FormControl('', Validators.required)
            }
          )
        }
      );
    }

  }
  onSubmit() {
    console.log('Before');
    console.log(this.addHotelForm.value);
    if (this.btnText === 'Add Hotel') {
      this.service.addHotel(this.addHotelForm.value).subscribe(data => console.log(data));
      console.log('Record added successfully');
    } else {
      this.service.updateHotel(this.addHotelForm.value).subscribe(data => console.log(data));
      console.log('Record updated successfully');
    }


  }

}
