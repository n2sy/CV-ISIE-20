import { TestBed } from '@angular/core/testing';

import { GererServersService } from './gerer-servers.service';

describe('GererServersService', () => {
  let service: GererServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GererServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
