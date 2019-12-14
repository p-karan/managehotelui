import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BodySectionLeftComponent } from './body-section-left/body-section-left.component';
import { BodySectionRightComponent } from './body-section-right/body-section-right.component';
import { BodySectionMiddleComponent } from './body-section-middle/body-section-middle.component';
import { AccessBoxComponent } from './access-box/access-box.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: BodySectionMiddleComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BodySectionLeftComponent,
    BodySectionRightComponent,
    BodySectionMiddleComponent,
    AccessBoxComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), NgxPaginationModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
