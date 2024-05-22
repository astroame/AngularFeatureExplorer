import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionDemoParentComponent } from './interaction-demo-parent.component';

describe('InteractionDemoParentComponent', () => {
  let component: InteractionDemoParentComponent;
  let fixture: ComponentFixture<InteractionDemoParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteractionDemoParentComponent]
    });
    fixture = TestBed.createComponent(InteractionDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
