import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { SmsMessagingService } from './sms-messaging.service'

@Component({
  selector: 'app-sms-messaging',
  templateUrl: './sms-messaging.component.html',
  styleUrls: ['./sms-messaging.component.css'],
  providers: [SmsMessagingService]
})
export class SmsMessagingComponent implements OnInit {
    model = {numbers:'',message:''};
    confirmed = {numbers: 'numbers default', message:'this is default message'}
    numbers = []
  constructor(private http: Http, private smsMessagingService: SmsMessagingService) { }

  ngOnInit() {
  }
  blastMessages(formModel){
    //console.log(formModel)
    this.smsMessagingService.blastMessages(formModel).subscribe(messageConfirmation => this.confirmed = messageConfirmation)
  }
  onInputChange(e){
      //console.log(e.target.value)
    this.numbers = this.smsMessagingService.onInputChange(e.target.value)
      console.log('this.numbers')
      console.log(this.numbers)
  }
}
