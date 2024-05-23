import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotProjectionDemoComponent } from './single-slot-projection-demo.component';

describe('SingleSlotProjectionDemoComponent', () => {
  let component: SingleSlotProjectionDemoComponent;
  let fixture: ComponentFixture<SingleSlotProjectionDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSlotProjectionDemoComponent]
    });
    fixture = TestBed.createComponent(SingleSlotProjectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
