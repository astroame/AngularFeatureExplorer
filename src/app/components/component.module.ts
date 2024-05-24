import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { ComponentRoutingModule } from './component-routing.module';
import { EncapsulationDemoComponent } from './encapsulation-demo/encapsulation-demo.component';
import { InteractionDemoParentComponent } from './interaction-demo-parent/interaction-demo-parent.component';
import { InteractionDemoChildComponent } from './interaction-demo-child/interaction-demo-child.component';
import { InlineStylesDemoComponent } from './styles/inline-styles-demo/inline-styles-demo.component';
import { ExternalStylesDemoComponent } from './styles/external-styles-demo/external-styles-demo.component';
import { ParentDemoComponent } from './shareData/parent-demo/parent-demo.component';
import { ChildDemoComponent } from './shareData/child-demo/child-demo.component';
import { SingleSlotProjectionDemoComponent } from './content-projection/single-slot-projection-demo/single-slot-projection-demo.component';
import { MultiSlotProjectionDemoComponent } from './content-projection/multi-slot-projection-demo/multi-slot-projection-demo.component';
import { DynamicChildComponent } from './dynamic-component/dynamic-child/dynamic-child.component';
import { DynamicHostComponent } from './dynamic-component/dynamic-host/dynamic-host.component';



@NgModule({
  declarations: [
    LifecycleDemoComponent,
    EncapsulationDemoComponent,
    InteractionDemoParentComponent,
    InteractionDemoChildComponent,
    InlineStylesDemoComponent,
    ExternalStylesDemoComponent,
    ParentDemoComponent,
    ChildDemoComponent,
    SingleSlotProjectionDemoComponent,
    MultiSlotProjectionDemoComponent,
    DynamicChildComponent,
    DynamicHostComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports : [LifecycleDemoComponent]
})
export class ComponentModule { }
