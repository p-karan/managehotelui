import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {HotelService} from "../hotel.service";
import {Hotel} from "../hotel";
import {Addresses} from "../addresses";
import {Rooms} from '../rooms';
import {RoomService} from "../room.service";

@Component({
  selector: 'app-addrooms',
  templateUrl: './addrooms.component.html',
  styleUrls: ['./addrooms.component.css']
})
export class AddroomsComponent implements OnInit {

  searchCityForm: FormGroup;
  searchHotelForm: FormGroup;
  addRoomForm: FormGroup;
  City = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'];
  hotelList: Hotel[];
  selectedCity: string;
  selectedHotelName: string;
  hotelReturned: Hotel;
  hotelId: number;

  newroom: Rooms = {
    roomId: 0,
    hotelId: 0,
    ratePerNight: 0,
    roomNo: 0,
    roomType: '',
    roomDescription: ''
  };
  private combinedConfig: any[][];

  constructor(private fb: FormBuilder, private route: Router, private hotelService: HotelService, private roomservice: RoomService) { }


  formConfig: any[] = [
    {
      name: 'city', type: 'text', placeholder: 'Select City',
      errorMsg: 'Select City before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'hotelName', type: 'text', placeholder: 'Select Hotel',
      errorMsg: 'Select Hotel Name before proceeding',
      constraint: [Validators.required]
    },
    {
      name: 'ratePerNight', type: 'number', label: 'Rate Per Night', placeholder: 'Enter rate',
      errorMsg: 'Enter rate before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'roomType', type: 'text', label: 'Room Type', placeholder: 'Enter room type',
      errorMsg: 'Enter room type before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'roomNo', type: 'number', label: 'Room No', placeholder: 'Enter room number',
      errorMsg: 'Enter room number before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'roomDescription', type: 'textarea', label: 'Room Description', placeholder: 'Enter room description',
      errorMsg: 'Enter room description before proceeding.',
      constraint: [Validators.required]
    }

  ];


  /*formConfigCityList: any[] = [
    {
      name: 'city', type: 'text', placeholder: 'Select City',
      errorMsg: 'Select City before proceeding.',
      constraint: [Validators.required]
    }
  ];

  formConfigHotelNameList: any[] = [
    {
      name: 'hotelName', type: 'text', placeholder: 'Select Hotel',
      errorMsg: 'Select Hotel Name before proceeding',
      constraint: [Validators.required]
    }
  ];

  formConfigRoom: any[] = [
    {
      name: 'ratePerNight', type: 'number', label: 'Rate Per Night', placeholder: 'Enter rate',
      errorMsg: 'Enter rate before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'roomType', type: 'text', label: 'Room Type', placeholder: 'Enter room type',
      errorMsg: 'Enter room type before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'roomNo', type: 'number', label: 'Room No', placeholder: 'Enter room number',
      errorMsg: 'Enter room number before proceeding.',
      constraint: [Validators.required]
    },
    {
      name: 'roomDescription', type: 'textarea', label: 'Room Description', placeholder: 'Enter room description',
      errorMsg: 'Enter room description before proceeding.',
      constraint: [Validators.required]
    }
  ];
*/

  createForm(): FormGroup {
    const group = this.fb.group({});

    this.formConfig.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));

  /*  this.formConfigCityList.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));


    this.formConfigHotelNameList.forEach(eachConfig => group.addControl(
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

    this.combinedConfig = [this.formConfigRoom,this.formConfigHotelNameList,this.formConfigCityList];*/
    return group;
  }

  /*createCityDropDown(): FormGroup {
    const group = this.fb.group({});

    this.formConfigCityList.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));

    return group;
  }

  createHotelDropDown(): FormGroup {
    const group = this.fb.group({});

    this.formConfigHotelNameList.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));
    return group;
  }

  createRoom(): FormGroup {
    const group = this.fb.group({});

    this.formConfigRoom.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));
    return group;
  }
*/
  onSubmit() {
    console.log('Submit Method Called');
    console.log('Form Values');
    console.log(this.addRoomForm.value);
    this.newroom.ratePerNight = this.addRoomForm.get('ratePerNight').value;
    console.log(this.addRoomForm.get('ratePerNight').value);
    console.log(this.newroom.ratePerNight);
    /*this.roomservice.addRoom(this.addRoomForm.value);*/
  }

  ngOnInit() {
    /*this.searchCityForm = this.createCityDropDown();
    this.searchHotelForm = this.createHotelDropDown();
    this.addRoomForm = this.createRoom();*/
    this.addRoomForm = this.createForm();
  }

  getHotelList(event){
    /*this.searchHotelForm = this.createHotelDropDown();*/
    this.hotelService.findAllByCity(event).subscribe(data => this.hotelList = data);
    this.selectedCity = event;
    console.log(event);
  }

  fetch(event) {
    this.selectedHotelName = event;
    this.hotelService.getHotelByNameandCity(this.selectedCity, this.selectedHotelName).subscribe(data => this.hotelReturned = data);
    console.log(this.selectedHotelName);
    this.hotelId = this.hotelReturned.hotelId;
    console.log(this.hotelId);
    /*this.addRoomForm = this.createRoom();*/
  }

  /*addRoom() {
    this.addRoomForm = this.createRoom();
  }*/
}
