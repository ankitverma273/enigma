import { TestBed } from '@angular/core/testing';

import { ConnectMetaMaskService } from './connect-meta-mask.service';

describe('ConnectMetaMaskService', () => {
  let service: ConnectMetaMaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectMetaMaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
