import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class SmsMessagingService {
    numbers = []
    constructor(private http: Http) {
    }
    
    onInputChange(inputValue){
        console.log('onInputChange called')
        this.numbers = inputValue.replace(/[^0-9\,]+/g, '')
        console.log(this.numbers)
        return this.numbers.split(',')
    }
    blastMessages(bodyObj){
        let smsUrl = 'http://localhost:3000/sms-messages';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(bodyObj)
        return this.http.post(smsUrl, body, options).map(this.extractData)
    }
    extractData(res: any) {
        //console.log('extract data called')
        //console.log(res)
        return JSON.parse(res._body) || { };
    }
}
