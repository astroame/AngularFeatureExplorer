import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { ComponentRoutingModule } from './component-routing.module';
import { EncapsulationDemoComponent } from './encapsulation-demo/encapsulation-demo.component';



@NgModule({
  declarations: [
    LifecycleDemoComponent,
    EncapsulationDemoComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports : [LifecycleDemoComponent]
})
export class ComponentModule { }
