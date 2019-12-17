import { Component, OnInit } from '@angular/core';
import {Searchresult} from '../searchresult';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';
import {SessionService} from '../session.service';
import {SearchresultService} from '../searchresult.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  idxPos = 0;
  searchForm: FormGroup;
  searchResultList: Searchresult[];
  City = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'];
  RoomType = ['ECONOMY', 'DELUXE', 'SUITE'];
  srchString = '';
  constructor(private fb: FormBuilder, private route: Router,
              private searchservice: SearchresultService, private sessionservice: SessionService) {
  }

  formConfig: any[] = [
    {
      name: 'fromDate', type: 'date', placeholder: 'From Date',
      errorMsg: 'From Date is required', constraint: Validators.required
    },
    {
      name: 'toDate', type: 'date', placeholder: 'To Date',
      errorMsg: 'To Date is required', constraint: Validators.required
    }
  ];

  formConfigSelect: any[] = [
    {
      name: 'city', type: 'text', placeholder: 'Select City',
      errorMsg: 'Role Required',
      constraint: [Validators.required]
    }
  ];

  ngOnInit() {
    this.searchForm = this.createForm();
  }

  createForm(): FormGroup {
    const group = this.fb.group({});

    this.formConfig.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));

    this.formConfigSelect.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })
    ));

    return group;
  }

  onSubmit() {
    console.log(this.searchForm.value);
    console.log('Search Form' + this.searchForm.get('city').value);
    console.log('Search Form' + this.searchForm.get('fromDate').value);
    console.log('Search Form' + this.searchForm.get('toDate').value);
    this.searchservice.searchByCityDateRange(this.searchForm.get('city').value,
      this.searchForm.get('fromDate').value, this.searchForm.get('toDate').value).subscribe(data => this.searchResultList = data);
  }
  book(obj){
    this.searchResultList.indexOf(obj);
  }


}
