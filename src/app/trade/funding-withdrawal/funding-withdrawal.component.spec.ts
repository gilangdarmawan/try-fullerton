import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingWithdrawalComponent } from './funding-withdrawal.component';

describe('FundingWithdrawalComponent', () => {
  let component: FundingWithdrawalComponent;
  let fixture: ComponentFixture<FundingWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
