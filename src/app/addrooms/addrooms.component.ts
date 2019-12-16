import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HotelService} from "../hotel.service";
import {Hotel} from "../hotel";

@Component({
  selector: 'app-addrooms',
  templateUrl: './addrooms.component.html',
  styleUrls: ['./addrooms.component.css']
})
export class AddroomsComponent implements OnInit {

  addRoomsForm: FormGroup;
  City = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'];
  hotelList: Hotel[];
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

  ngOnInit() {
      this.addRoomsForm = this.createForm();
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

    return group;
  }
  onSubmit(){

  }

  fetch(){
    this.hotelService.findAll().subscribe(data => this.hotelList = data);
    console.log(this.hotelList)
  }
}
