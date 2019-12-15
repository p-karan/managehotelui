import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {Addresses} from "../addresses";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  /*@ViewChild('frm', {static: false}) form: any;*/
  registrationForm: FormGroup;
  errorMessage = '';
  showErrorLabel = 'none';
  showSuccessLabel = 'none';

  userAdded: User[];

  constructor(private service: UserService, private router: Router) {
  }

  ngOnInit() {

    this.registrationForm = new FormGroup({
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),

        firstName: new FormControl('', Validators.required),
        middleName: new FormControl(null),
        lastName: new FormControl('', Validators.required),
        role: new FormControl('USER'),
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
    )

  }

  onSubmit() {
    console.log("Before");
    console.log(this.registrationForm.value);

    this.service.registerUser(this.registrationForm.value).subscribe(data => console.log(data));
    /*console.log("Record added successfully");*/


  }

}
