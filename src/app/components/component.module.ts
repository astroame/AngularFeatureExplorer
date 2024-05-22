import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { ComponentRoutingModule } from './component-routing.module';



@NgModule({
  declarations: [
    LifecycleDemoComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports : [LifecycleDemoComponent]
})
export class ComponentModule { }
