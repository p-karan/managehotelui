import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../login.service";
import {SessionService} from "../session.service";
import {Booking} from "../booking";
import {BookingService} from "../booking.service";

@Component({
  selector: 'app-showbookinghistory',
  templateUrl: './showbookinghistory.component.html',
  styleUrls: ['./showbookinghistory.component.css']
})
export class ShowbookinghistoryComponent implements OnInit {

  bookingList : Booking[];
  constructor(private route: Router, private sessionservice: SessionService, private service: BookingService) { }

  ngOnInit() {

    this.service.searchBookingByUserName(sessionStorage.getItem('userName')).subscribe(data => this.bookingList = data);

  }

}
