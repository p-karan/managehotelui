import { Component, OnInit } from '@angular/core';
import {BookingService} from "../booking.service";
import {Router} from "@angular/router";
import {HotelService} from "../hotel.service";
import {Booking} from "../booking";
import {Hotel} from "../hotel";
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {Location} from '@angular/common';

@Component({
  selector: 'app-reportbydate',
  templateUrl: './reportbydate.component.html',
  styleUrls: ['./reportbydate.component.css']
})
export class ReportbydateComponent implements OnInit {

  constructor(private bookingService: BookingService, private router: Router,
              private hotelService: HotelService, private location: Location) { }
  p = 0;
  bookingList: Booking[];
  bookingDate: Date;
  reportId: Date;
  report = true;


  ngOnInit() {
    // this.hotelService.findAll().subscribe(data => this.hotelList = data);
  }
  onSubmit(value) {
    console.log(value)
    // this.bookingService.findAllByHotelId(this.hotelId).subscribe(data => this.bookingList = data);
    this.bookingService.findAllBookingBySpecificDate(this.bookingDate).subscribe(data => this.bookingList = data);
    this.report=false;
    this.reportId=this.bookingDate;
  }

  exportToPdf() {
    const element = document.getElementById('MyPDF');
    html2canvas(element).then(canvas => {
      const contentDataURL = canvas.toDataURL('application/pdf')
      const pdf = new jspdf('l', 'cm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
      pdf.save('Report_Date_'+ this.reportId+'.pdf');
    });
  }

  backClicked() {
    this.location.back();
  }
}


