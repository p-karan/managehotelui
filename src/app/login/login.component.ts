import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {SessionService} from "../session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: User;
  loginForm: FormGroup;
  loginStatus: string;
  constructor(private fb: FormBuilder, private route: Router, private loginservice: LoginService, private sessionservice: SessionService) { }

  formConfig: any[] = [
    {
      name: 'userName', type: 'text', placeholder: 'Enter User Name',
      label: 'User Name', errorMsg: 'Username is required',
      constraint: [Validators.required, Validators.maxLength(15), Validators.minLength(5)]
    },
    {
      name: 'password', type: 'password', placeholder: 'Enter Password',
      label: 'Password', errorMsg: 'Password is required', constraint: Validators.required
    }
  ];

  ngOnInit() {
    this.loginForm = this.createForm();
  }

  createForm(): FormGroup {
    const group = this.fb.group({});

    this.formConfig.forEach(eachConfig => group.addControl(
      eachConfig.name, new FormControl('', {
        validators:
        eachConfig.constraint, updateOn: 'blur'
      })

    ));
    return group;
  }

  validation = (data: User) => {
    const [username, password] = [this.loginForm.get('userName').value, this.loginForm.get('password').value];
    console.log('Data: ' + data.userName);
    this.loginForm.reset();
    if (username === data.userName && password === data.password) {
      this.loginStatus = 'Valid user';
      sessionStorage.setItem('userLogged', 'yes');
      this.sessionservice.changeLoginStatus('logged');
      this.route.navigate(['/home']);
      console.log('Status:' + this.loginStatus);
    } else {
      this.loginStatus = 'Invalid Credentials ! Try Again';
      console.log('Status:' + this.loginStatus);
      this.route.navigate(['/login'])
    }
  };

  onSubmit() {
    console.log(this.loginForm.value);
   /* console.log(this.userLogin);*/
    console.log('Login Form' + this.loginForm.get('userName').value);
    this.loginservice.findByUserName(this.loginForm.get('userName').value).
    subscribe(data => this.validation(data));
  }

}
