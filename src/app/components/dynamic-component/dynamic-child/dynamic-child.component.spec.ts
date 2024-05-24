import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChildComponent } from './dynamic-child.component';

describe('DynamicChildComponent', () => {
  let component: DynamicChildComponent;
  let fixture: ComponentFixture<DynamicChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicChildComponent]
    });
    fixture = TestBed.createComponent(DynamicChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
