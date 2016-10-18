import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './app.routing';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';
import { SmsMessagingComponent } from './sms-messaging/sms-messaging.component';
import { HomeComponent } from './home/home.component';
/* not generated from CLI  */
import { DatepickerModule } from 'angular2-material-datepicker'

@NgModule({
  declarations: [
    AppComponent,
    LayoutSidenavComponent,
    SmsMessagingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    routing,
    MaterialModule.forRoot()
=======
    DatepickerModule
>>>>>>> date-picker
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
