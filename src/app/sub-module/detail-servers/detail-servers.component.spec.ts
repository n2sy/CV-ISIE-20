import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServersComponent } from './detail-servers.component';

describe('DetailServersComponent', () => {
  let component: DetailServersComponent;
  let fixture: ComponentFixture<DetailServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
