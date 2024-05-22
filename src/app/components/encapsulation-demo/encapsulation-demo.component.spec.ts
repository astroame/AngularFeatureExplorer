import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationDemoComponent } from './encapsulation-demo.component';

describe('EncapsulationDemoComponent', () => {
  let component: EncapsulationDemoComponent;
  let fixture: ComponentFixture<EncapsulationDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapsulationDemoComponent]
    });
    fixture = TestBed.createComponent(EncapsulationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
