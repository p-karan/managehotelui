import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelService} from '../hotel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-managehotel',
  templateUrl: './managehotel.component.html',
  styleUrls: ['./managehotel.component.css']
})
export class ManagehotelComponent implements OnInit {
  addHotelForm: FormGroup;
  constructor(private service: HotelService, private router: Router) { }

  ngOnInit() {

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
  onSubmit() {
    console.log('Before');
    console.log(this.addHotelForm.value);

    this.service.addHotel(this.addHotelForm.value).subscribe(data => console.log(data));
    /*console.log("Record added successfully");*/


  }

}
