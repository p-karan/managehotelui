import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {HotelService} from "../hotel.service";
import {Hotel} from "../hotel";
import {Addresses} from "../addresses";
import {Rooms} from '../rooms';

@Component({
  selector: 'app-addrooms',
  templateUrl: './addrooms.component.html',
  styleUrls: ['./addrooms.component.css']
})
export class AddroomsComponent implements OnInit {

  searchHotelForm: FormGroup;
  addRoomForm: FormGroup;
  City = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'];
  hotelList: Hotel[];
  room: Rooms = {
    roomId: 0,
    hotelId: 0,
    ratePerNight: 0,
    roomNo: 0,
    roomType: '',
    roomDescription: ''
  }

  constructor(private fb: FormBuilder, private route: Router, private hotelService: HotelService) { }

  formConfigSelect: any[] = [
    {
      name: 'city', type: 'text', placeholder: 'Select City',
      errorMsg: 'Select City before proceeding.',
      constraint: [Validators.required]
    }
  ];

  formConfigSelectHotelName: any[] = [
    {
      name: 'hotelName', type: 'text', placeholder: 'Select Hotel',
      errorMsg: 'Select Hotel Name before proceeding',
      constraint: [Validators.required]
    }
  ];

  formConfigRoom: any[] = [
    {
      name: 'ratePerNight', type: 'number', placeholder: 'Enter rate',
      errorMsg: 'Enter rate before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'roomType', type: 'text', placeholder: 'Enter room type',
      errorMsg: 'Enter room type before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'roomNo', type: 'number', placeholder: 'Enter room number',
      errorMsg: 'Enter room number before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'roomDescription', type: 'text', placeholder: 'Enter room description',
      errorMsg: 'Enter room description before proceeding.',
      constraint: [Validators.required]
    }
  ];

  ngOnInit() {
      this.searchHotelForm = this.createForm();
  }

  createForm(): FormGroup {
    const group = this.fb.group({});

    this.formConfigSelect.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));

    this.formConfigSelectHotelName.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));

    this.formConfigRoom.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));
    return group;
  }
  onSubmit() {

  }

  fetch(event) {
    this.hotelService.findAllByCity(event).subscribe(data => this.hotelList = data);
    console.log(this.hotelList);
  }

  addRoom() {
    this.addRoomForm = this.createForm();
  }
}
