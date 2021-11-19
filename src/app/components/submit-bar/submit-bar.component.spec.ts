import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBarComponent } from './submit-bar.component';

describe('SubmitBarComponent', () => {
  let component: SubmitBarComponent;
  let fixture: ComponentFixture<SubmitBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
