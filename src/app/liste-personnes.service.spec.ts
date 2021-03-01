import { TestBed } from '@angular/core/testing';

import { ListePersonnesService } from './liste-personnes.service';

describe('ListePersonnesService', () => {
  let service: ListePersonnesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListePersonnesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
