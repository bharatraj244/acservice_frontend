import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    /*AddcenterComponent,
    AdminComponent,
    CenterprofileComponent*/
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   UserModule,
    NgbModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
