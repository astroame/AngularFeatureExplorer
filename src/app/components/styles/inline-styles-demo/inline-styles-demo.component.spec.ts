import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStylesDemoComponent } from './inline-styles-demo.component';

describe('InlineStylesDemoComponent', () => {
  let component: InlineStylesDemoComponent;
  let fixture: ComponentFixture<InlineStylesDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineStylesDemoComponent]
    });
    fixture = TestBed.createComponent(InlineStylesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
