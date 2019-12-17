import { Component, OnInit } from '@angular/core';
import {BookingService} from '../booking.service';
import {Booking} from '../booking';
import {Router} from '@angular/router';
import {HotelService} from '../hotel.service';
import {Hotel} from "../hotel";
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {Location} from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private bookingService: BookingService, private router: Router, private hotelService: HotelService, private location: Location) { }
  p = 0;
  bookingList: Booking[];
  hotelList: Hotel[];
  hotelId: string;
  reportId: string;
  report = true;


  ngOnInit() {
    this.hotelService.findAll().subscribe(data => this.hotelList = data);
  }
  onSubmit(value) {
    console.log(value)
    // this.bookingService.findAllByHotelId(this.hotelId).subscribe(data => this.bookingList = data);
    this.bookingService.findAllByHotelId(this.hotelId).subscribe(data => this.bookingList = data);
    this.report=false;
    this.reportId=this.hotelId;
  }

  exportToPdf() {
    const element = document.getElementById('MyPDF');
    html2canvas(element).then(canvas => {
      const contentDataURL = canvas.toDataURL('application/pdf')
      const pdf = new jspdf('l', 'cm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
      pdf.save('Report_Hotel Id_' + this.hotelId+'.pdf');
    });
  }

  backClicked() {
    this.location.back();
  }

}
