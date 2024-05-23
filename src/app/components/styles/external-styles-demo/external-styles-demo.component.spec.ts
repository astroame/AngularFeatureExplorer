import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalStylesDemoComponent } from './external-styles-demo.component';

describe('ExternalStylesDemoComponent', () => {
  let component: ExternalStylesDemoComponent;
  let fixture: ComponentFixture<ExternalStylesDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalStylesDemoComponent]
    });
    fixture = TestBed.createComponent(ExternalStylesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
