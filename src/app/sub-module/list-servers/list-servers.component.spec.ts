import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServersComponent } from './list-servers.component';

describe('ListServersComponent', () => {
  let component: ListServersComponent;
  let fixture: ComponentFixture<ListServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
