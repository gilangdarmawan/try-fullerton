import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullertonComponent } from './fullerton.component';

describe('FullertonComponent', () => {
  let component: FullertonComponent;
  let fixture: ComponentFixture<FullertonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullertonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullertonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
