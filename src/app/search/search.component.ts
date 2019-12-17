import { Component, OnInit } from '@angular/core';
import {Searchresult} from '../searchresult';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';
import {SessionService} from '../session.service';
import {SearchresultService} from '../searchresult.service';
import {BookingService} from '../booking.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  idxPos = 0;
  searchForm: FormGroup;
  fromDate: Date;
  toDate: Date;
  searchResultList: Searchresult[];
  searchResultObj: Searchresult = {
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
  City = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'];
  RoomType = ['ECONOMY', 'DELUXE', 'SUITE'];
  srchString = '';
  constructor(private fb: FormBuilder, private route: Router,
              private searchservice: SearchresultService, private sessionservice: SessionService, private data: DataService) {
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
    this.fromDate = this.searchForm.get('fromDate').value;
    this.toDate = this.searchForm.get('toDate').value;
    this.data.updateToDate(this.toDate);
    this.data.updateFromDate(this.fromDate);
    this.searchservice.searchByCityDateRange(this.searchForm.get('city').value,
      this.searchForm.get('fromDate').value, this.searchForm.get('toDate').value).subscribe(data => this.searchResultList = data);
  }

  book(obj) {
    this.idxPos = this.searchResultList.indexOf(obj);
    this.searchResultObj = obj;
    console.log(this.searchResultObj);
    this.data.updateSearchResult(this.searchResultObj);
    this.route.navigate(['/booking']);
/*    this.data.updateButton('Update Hotel');
    this.data.updateTitle('Update Hotel Details:');
    this.data.updateStatus('Object');*/
  }

}
