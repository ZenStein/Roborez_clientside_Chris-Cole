/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SmsMessagingService } from './sms-messaging.service';

describe('Service: SmsMessaging', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmsMessagingService]
    });
  });

  it('should ...', inject([SmsMessagingService], (service: SmsMessagingService) => {
    expect(service).toBeTruthy();
  }));
});
