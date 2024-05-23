import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotProjectionDemoComponent } from './multi-slot-projection-demo.component';

describe('MultiSlotProjectionDemoComponent', () => {
  let component: MultiSlotProjectionDemoComponent;
  let fixture: ComponentFixture<MultiSlotProjectionDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSlotProjectionDemoComponent]
    });
    fixture = TestBed.createComponent(MultiSlotProjectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
