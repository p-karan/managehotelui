import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookingService} from '../booking.service';
import {Router} from '@angular/router';
import {Booking} from '../booking';
import {DataService} from '../data.service';
import {Searchresult} from '../searchresult';
import {SessionService} from '../session.service';


@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {

  createBookingForm: FormGroup;
  FromDate: Date;
  ToDate: Date;
  noOfDaysBooked: number;
  totalPaymentAmount: number;
/*  dateDD: string;
  dateMM: string;
  dateYY: string;
  formatDate: string;
  paymentDate: Date;*/
  booking: Booking =  {
    bookingId: 0,
    bookedFromDate: new Date(),
    bookedToDate: new Date(),
    daysBooked: 0,
    checkInDateTime: new Date(),
    checkOutDateTime: new Date(),
    bookingAmount: 0,
    noOfAdults: 1,
    noOfChildren: 0,
    bookedBy: '',
    bookingStatus: '',
    hotelId: 0,
    roomId: 0,
    userId: 0,
    userName: '',
    payMode: ''
  };
  searchResultReceived: Searchresult = {
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
  };
  titleBookingText = 'Booking Details:';
  titlePaymentText = 'Add Payment Details:';
  constructor(private service: BookingService, private router: Router, private data: DataService,
              private sessionServices: SessionService) { }

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
    // Check to see if user is logged in
    const loggedStatus = sessionStorage.getItem('userLogged');
    if (loggedStatus == null) {
      this.router.navigate(['/login']);
    }
    /*Need to add logic to get data from search list to here*/
    this.data.shareSearchResult.subscribe(receivedSearch => this.searchResultReceived = receivedSearch);
    /*const hotelId = this.searchResultReceived.hotelId;*/
    this.data.shareToDate.subscribe(receiveToDate => this.booking.bookedToDate = receiveToDate);
    this.data.shareFromDate.subscribe(receiveFromDate => this.booking.bookedFromDate = receiveFromDate);
    this.ToDate = new Date(this.booking.bookedToDate);
    this.FromDate = new Date(this.booking.bookedFromDate);
/*    this.dateDD = new Date().getDate().toString();
    this.dateMM = new Date().getMonth().toString();
    this.dateYY = new Date().getFullYear().toString();
    this.formatDate = this.dateYY + '-' + this.dateMM + '-' + this.dateDD;
    this.paymentDate = new Date(this.formatDate);*/
    console.log('to date:');
    console.log(this.ToDate.getDay());
    console.log('from date:');
    console.log(this.FromDate.getDay());
    this.noOfDaysBooked = this.ToDate.getDay() - this.FromDate.getDay();
    console.log('Date Diff');
    console.log(this.noOfDaysBooked);
    this.totalPaymentAmount = this.noOfDaysBooked * this.searchResultReceived.ratePerNight;
    console.log('Payment Amount');
    console.log(this.totalPaymentAmount);
    console.log('Payment Date');
/*    this.bookedFromDate = this.booking.bookedFromDate.getDate();
    this.noOfDaysBooked = this.bookedToDate - this.bookedFromDate;
    console.log('this.noOfDaysBooked');
    console.log(this.noOfDaysBooked);*/
    /*console.log(this.ToDate);*/
/*    console.log(this.bookedFromDate);*/
    this.createBookingForm = new FormGroup({
    bookingId: new FormControl(this.booking.bookingId),
    bookedFromDate: new FormControl(this.booking.bookedFromDate, Validators.required),
    bookedToDate: new FormControl(this.booking.bookedToDate, [Validators.required]),
    daysBooked: new FormControl(this.noOfDaysBooked),
    checkInDateTime: new FormControl(null),
    checkOutDateTime: new FormControl(null),
    bookingAmount: new FormControl(this.totalPaymentAmount, [Validators.required]),
    noOfAdults: new FormControl(this.booking.noOfAdults, Validators.min(1)),
    noOfChildren: new FormControl(this.booking.noOfChildren),
    bookedBy: new FormControl(sessionStorage.getItem('userName'), Validators.required),
    bookingStatus: new FormControl('CONFIRMED'),
    hotelId: new FormControl(this.searchResultReceived.hotelId),
    roomId: new FormControl(this.searchResultReceived.roomId),
    userId: new FormControl(sessionStorage.getItem('userId')),
    userName: new FormControl(sessionStorage.getItem('userName')),
    payMode: new FormControl('CARD', Validators.required)});
}

  onSubmit() {
    console.log('OnSubmit called from createbooking');
    console.log(this.createBookingForm.value);
    this.service.addBooking(this.createBookingForm.value).subscribe(data => console.log(data));
    this.router.navigate(['/success']);
  }



}






