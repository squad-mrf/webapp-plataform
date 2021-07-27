import { TestBed } from '@angular/core/testing';

import { ConnectService } from './connect.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ConnectService', () => {
  let service: ConnectService,
      httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ConnectService
      ]
    });
    service = TestBed.inject(ConnectService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
