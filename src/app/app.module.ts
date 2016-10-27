import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './app.routing';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';
import { SmsMessagingComponent } from './sms-messaging/sms-messaging.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';

import { HomeComponent } from './home/home.component';
/* not generated from CLI, and not my code  */
import { DatepickerModule } from 'angular2-material-datepicker'
import {Ng2MaterialModule} from 'ng2-material'
import {AgGridModule} from 'ag-grid-ng2/main';

@NgModule({
  declarations: [
    AppComponent,
    LayoutSidenavComponent,
    SmsMessagingComponent,
    MakeReservationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    DatepickerModule,
    AgGridModule.withNg2ComponentSupport()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
