import { Component, OnInit } from '@angular/core';
import {Room} from '../room';
import {RoomService} from '../room.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  srchCity = '';
  srchRoomType: '';
  roomList: Room[];

  constructor(private service: RoomService, private router: Router) { }

  ngOnInit() {
    this.service.findAllRoom().subscribe(data => this.roomList = data);
    // console.log(this.roomList.forEach());

   /* console.log(this.service.findAllRoom().subscribe(data));*/
  }


}
