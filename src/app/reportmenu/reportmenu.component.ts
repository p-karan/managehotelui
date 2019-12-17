import { Component, OnInit } from '@angular/core';
import {Navlink} from "../navlink";

@Component({
  selector: 'app-reportmenu',
  templateUrl: './reportmenu.component.html',
  styleUrls: ['./reportmenu.component.css']
})
export class ReportmenuComponent implements OnInit {

 /* links: Navlink[] = [
    {link: 'report', text: 'View Bookings of specific hotel'},
    {link: 'showcustomer', text: 'View bookings for specified date'},
    // {link: 'passenger', text: 'Passenger'}
  ]*/

  constructor() { }

  ngOnInit() {
  }

}
