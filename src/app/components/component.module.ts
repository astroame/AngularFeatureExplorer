import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { ComponentRoutingModule } from './component-routing.module';
import { EncapsulationDemoComponent } from './encapsulation-demo/encapsulation-demo.component';
import { InteractionDemoParentComponent } from './interaction-demo-parent/interaction-demo-parent.component';
import { InteractionDemoChildComponent } from './interaction-demo-child/interaction-demo-child.component';
import { InlineStylesDemoComponent } from './styles/inline-styles-demo/inline-styles-demo.component';
import { ExternalStylesDemoComponent } from './styles/external-styles-demo/external-styles-demo.component';



@NgModule({
  declarations: [
    LifecycleDemoComponent,
    EncapsulationDemoComponent,
    InteractionDemoParentComponent,
    InteractionDemoChildComponent,
    InlineStylesDemoComponent,
    ExternalStylesDemoComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports : [LifecycleDemoComponent]
})
export class ComponentModule { }
