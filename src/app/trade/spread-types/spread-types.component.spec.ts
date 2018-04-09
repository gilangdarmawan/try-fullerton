import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadTypesComponent } from './spread-types.component';

describe('SpreadTypesComponent', () => {
  let component: SpreadTypesComponent;
  let fixture: ComponentFixture<SpreadTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
