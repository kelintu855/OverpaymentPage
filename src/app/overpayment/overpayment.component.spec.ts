import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverpaymentComponent } from './overpayment.component';

describe('OverpaymentComponent', () => {
  let component: OverpaymentComponent;
  let fixture: ComponentFixture<OverpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
