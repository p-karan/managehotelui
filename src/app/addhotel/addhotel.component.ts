import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelService} from '../hotel.service';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService} from '../data.service';
import {Hotel} from '../hotel';
import {OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  addHotelForm: FormGroup;
  hotel: Hotel = {
    hotelId: 0,
    hotelName: '',
    addresses: {
      addressBldgFlat: '',
      addressStreet: '',
      addressCity: '',
      addressState: '',
      addressPincode: '',
      email: '',
      mobileNo: '',
      primaryPhone: '',
      secondaryPhone: '',
    },
    rating: 0,
    hotelDescription: '',
    discount: 0,
    hotelOperationalStatus: ''
  };

  btnText = 'Add Hotel';
  titleText = 'Add Hotel Details:';
  statusCheck = '';
  statusMessage = '';
  showErrorLabel = '';
  showSuccessLabel = '';
  status: boolean;
  private hotelShare: Subscription;
  private hotelShareButton: Subscription;
  private hotelShareTitle: Subscription;
  private hotelShareStatus: Subscription;
  constructor(private service: HotelService, private router: Router, private data: DataService) {
    this.status = false;
  }

 /* unsubscribeprivate unsubscribe: Subject<void> = new Subject();*/

  ngOnInit() {
    /*this.hotelShareStatus = this.data.statusCheckService.pipe(takeUntil(this.unsubscribe)).subscribe(receiveStatus => this.statusCheck = receiveStatus);
*/
    this.hotelShareStatus = this.data.statusCheckService.subscribe(receiveStatus => this.statusCheck = receiveStatus);
    console.log('First logins');
    console.log(this.statusCheck);
    // this.statusCheck = '';
    // this.statusMessage = '';
    // this.showErrorLabel = '';
    // this.showSuccessLabel = '';
    if (this.statusCheck !== '' ) {
      console.log('checking status');
      console.log(this.status);
      console.log('inside status loop');
      /*this.hotelShare = this.data.share.pipe(takeUntil(this.unsubscribe)).subscribe(receiveUpdate => this.hotel = receiveUpdate);*/
      this.hotelShare = this.data.share.subscribe(receiveUpdate => this.hotel = receiveUpdate);
      this.data.shareStatusMessage.subscribe(updateStatusMessage => this.statusMessage = updateStatusMessage)
        /*      this.active.params.subscribe(params => {
                this.hotel = params;
                console.log('inside params');
                console.log(this.hotel);
              });*/
        /*this.hotelShareButton = this.data.shareButton.pipe(takeUntil(this.unsubscribe)).subscribe(updateButton => this.btnText = updateButton);
        this.hotelShareTitle = this.data.shareTitle.pipe(takeUntil(this.unsubscribe)).subscribe(updateTitle => this.titleText = updateTitle);*/
      this.hotelShareButton = this.data.shareButton.subscribe(updateButton => this.btnText = updateButton);
      //this.statusMessage
      this.hotelShareTitle = this.data.shareTitle.subscribe(updateTitle => this.titleText = updateTitle);
    }
    console.log('inside onInit');
    console.log(this.hotel.hotelName);
    if (this.hotel.hotelName !== '') {
      this.addHotelForm = new FormGroup({
          hotelId: new FormControl(this.hotel.hotelId),
          hotelName: new FormControl(this.hotel.hotelName, Validators.required),
          rating: new FormControl(this.hotel.rating, Validators.required),

          discount: new FormControl(this.hotel.discount, Validators.required),
          hotelOperationalStatus: new FormControl(this.hotel.hotelOperationalStatus),
          hotelDescription: new FormControl(this.hotel.hotelDescription, Validators.required),
          addresses: new FormGroup(
            {
              addressBldgFlat: new FormControl(this.hotel.addresses.addressBldgFlat, Validators.required),
              addressStreet: new FormControl(this.hotel.addresses.addressStreet, Validators.required),
              addressCity: new FormControl(this.hotel.addresses.addressCity, Validators.required),
              addressState: new FormControl(this.hotel.addresses.addressState, Validators.required),
              addressPincode: new FormControl(this.hotel.addresses.addressPincode, [Validators.required, Validators.pattern('^[0-9]*$')]),

              mobileNo: new FormControl(this.hotel.addresses.mobileNo, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              primaryPhone: new FormControl(this.hotel.addresses.primaryPhone, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              secondaryPhone: new FormControl(this.hotel.addresses.secondaryPhone, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              email: new FormControl(this.hotel.addresses.email, Validators.required)
            }
          )
        }
      );
    } else {
      this.addHotelForm = new FormGroup({
          hotelName: new FormControl('', Validators.required),
          rating: new FormControl('', Validators.required),

          discount: new FormControl('', Validators.required),
          hotelOperationalStatus: new FormControl(null),
          hotelDescription: new FormControl('', Validators.required),
          addresses: new FormGroup(
            {
              addressBldgFlat: new FormControl('', Validators.required),
              addressStreet: new FormControl('', Validators.required),
              addressCity: new FormControl('', Validators.required),
              addressState: new FormControl('', Validators.required),
              addressPincode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),

              mobileNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              primaryPhone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              secondaryPhone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
              email: new FormControl('', Validators.required)
            }
          )
        }
      );
    }
  }
/*  ngOnDestroy() {
    console.log('ngOnDestory');
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }*/
  getMessage = (message: Hotel) => {
    if (message.hotelId === null) {
      this.showErrorLabel = 'inline';
      this.showSuccessLabel = 'none';
      this.statusMessage = 'Sorry, action unsuccessful!';
    } else {
      this.showErrorLabel = 'none';
      this.showSuccessLabel = 'inline';
      this.statusMessage = 'Action successful!';
    }
  }

/*  ngOnDestroy(){
    this.hotelShare.unsubscribe();
    this.hotelShareButton.unsubscribe();
    this.hotelShareTitle.unsubscribe();
  }*/


  onSubmit() {
    console.log('Before');
    console.log(this.addHotelForm.value);
    if (this.btnText === 'Add Hotel') {
     /* this.service.addHotel(this.addHotelForm.value).subscribe(data => console.log(data), (error) => this.getMessage(error.error.text));
      console.log('Record added successfully');*/
      this.service.addHotel(this.addHotelForm.value).subscribe(data => this.getMessage(data));
      this.addHotelForm.reset();
      console.log('Record added successfully');
    } else {
      /* this.service.updateHotel(this.addHotelForm.value).subscribe(data => console.log(data), (error) => this.getMessage(error.error.text));
      console.log('Record updated successfully');*/
      this.service.updateHotel(this.addHotelForm.value).subscribe(data => this.getMessage(data));
      this.addHotelForm.reset();


      /*this.data.share.subscribe(data => this.hotelAfterUpdate = data);*/
      /*this.ngOnDestroy();*/
      /*this.service.updateHotel(this.addHotelForm.value).subscribe(data => this.getMessage(data));*/
      /*this.hotelShareButton.unsubscribe();
      this.hotelShareTitle.unsubscribe();*/
      /*this.hotelShareStatus.unsubscribe();*/
      /*this.hotel = this.hotelAfterUpdate;*/
      console.log('Record updated successfully');
      /*this.router.navigate(['/updatehotel']);*/
    }


  }

}
