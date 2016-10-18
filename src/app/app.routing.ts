import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmsMessagingComponent } from './sms-messaging/sms-messaging.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path:'sms_messaging',component: SmsMessagingComponent},
    {path:'',component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
