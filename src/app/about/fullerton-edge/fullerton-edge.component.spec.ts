import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullertonEdgeComponent } from './fullerton-edge.component';

describe('FullertonEdgeComponent', () => {
  let component: FullertonEdgeComponent;
  let fixture: ComponentFixture<FullertonEdgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullertonEdgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullertonEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
