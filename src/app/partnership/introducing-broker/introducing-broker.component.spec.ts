import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducingBrokerComponent } from './introducing-broker.component';

describe('IntroducingBrokerComponent', () => {
  let component: IntroducingBrokerComponent;
  let fixture: ComponentFixture<IntroducingBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducingBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducingBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
