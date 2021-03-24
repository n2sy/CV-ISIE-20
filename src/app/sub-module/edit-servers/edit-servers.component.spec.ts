import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServersComponent } from './edit-servers.component';

describe('EditServersComponent', () => {
  let component: EditServersComponent;
  let fixture: ComponentFixture<EditServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
