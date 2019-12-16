import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookingService} from '../booking.service';
import {Router} from '@angular/router';
import {Booking} from '../booking';
import {Payment} from "../payment";

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {

  createBookingForm: FormGroup;
  bookedFrom: '';
  booking: Booking =  {
    bookingId: 0,
    bookedFromDate: new Date(),
    bookedToDate: new Date(Date.now() + ( 3600 * 60 * 60 * 24)),
    daysBooked: 1,
    checkInDateTime: new Date(),
    checkOutDateTime: new Date(),
    bookingAmount: 0,
    noOfAdults:1,
    noOfChildren: 0,
    bookedBy: '',
    bookingStatus: '',
    hotelId: 0,
    roomId: 0,
    userId: 0,
    userName: '',
    paymentSet: {
        paymentId: 0,
        payStatus: '',
        payAmount: 0,
        payDate: new Date(),
        payMode: '',
      }
  };
  titleBookingText = 'Add Booking Details:';
  titlePaymentText = 'Add Payment Details:';

  constructor(private service: BookingService, private router: Router, ) { }

  /*ngOnInit() {
    this.createBookingForm = new FormGroup({
      bookingId: new FormControl(),
      bookedFromDate: new FormControl(Validators.required),
      bookedToDate: new FormControl([Validators.required]),
      daysBooked: new FormControl(),
      checkInDateTime: new FormControl(),
      checkOutDateTime: new FormControl(),
      bookingAmount: new FormControl([Validators.required]),
      noOfAdults: new FormControl(),
      noOfChildren: new FormControl(),
      bookedBy: new FormControl(Validators.required),
      bookingStatus: new FormControl(),
      hotelId: new FormControl(),
      roomId: new FormControl(),
      userId: new FormControl(),
      userName: new FormControl(),
      paymentSet: new FormGroup(
        {
          paymentId: new FormControl(),
          payStatus: new FormControl(),
          payAmount: new FormControl(Validators.required),
          payDate: new FormControl(Validators.required),
          payMode: new FormControl(Validators.required),
          }
        )
      }
    )
    console.log(this.bookedFrom);
  }*/

  ngOnInit() {
  this.createBookingForm = new FormGroup({
    bookingId: new FormControl(this.booking.bookingId),
    bookedFromDate: new FormControl(this.booking.bookedFromDate, Validators.required),
    bookedToDate: new FormControl(this.booking.bookedToDate, [Validators.required]),
    daysBooked: new FormControl(this.booking.daysBooked),
    checkInDateTime: new FormControl(this.booking.checkInDateTime),
    checkOutDateTime: new FormControl(this.booking.checkOutDateTime),
    bookingAmount: new FormControl(this.booking.bookingAmount, [Validators.required]),
    noOfAdults: new FormControl(this.booking.noOfAdults, Validators.min(1)),
    noOfChildren: new FormControl(this.booking.noOfChildren),
    bookedBy: new FormControl(this.booking.bookedBy, Validators.required),
    bookingStatus: new FormControl(this.booking.bookedBy),
    hotelId: new FormControl(this.booking.hotelId),
    roomId: new FormControl(this.booking.roomId),
    userId: new FormControl(this.booking.userId),
    userName: new FormControl(this.booking.userName),
    paymentSet: new FormGroup(
      {
        paymentId: new FormControl(this.booking.paymentSet.paymentId),
        payStatus: new FormControl(this.booking.paymentSet.payStatus),
        payAmount: new FormControl(this.booking.paymentSet.payAmount, Validators.required),
        payDate: new FormControl(this.booking.paymentSet.payDate, Validators.required),
        payMode: new FormControl(this.booking.paymentSet.payMode, Validators.required),
      }
    )
  })

}

  onSubmit() {
    console.log(this.createBookingForm.value);
    this.service.addBooking(this.createBookingForm.value).subscribe(data => console.log(data));
  }

  booked

}





