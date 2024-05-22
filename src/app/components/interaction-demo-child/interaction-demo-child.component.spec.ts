import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionDemoChildComponent } from './interaction-demo-child.component';

describe('InteractionDemoChildComponent', () => {
  let component: InteractionDemoChildComponent;
  let fixture: ComponentFixture<InteractionDemoChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteractionDemoChildComponent]
    });
    fixture = TestBed.createComponent(InteractionDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
