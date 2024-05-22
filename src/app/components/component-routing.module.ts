import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LifecycleDemoComponent } from "./lifecycle-demo/lifecycle-demo.component";
import { EncapsulationDemoComponent } from "./encapsulation-demo/encapsulation-demo.component";
import { InteractionDemoParentComponent } from "./interaction-demo-parent/interaction-demo-parent.component";

const routes: Routes = [
  {
    path: "lifecycle-demo",
    component: LifecycleDemoComponent,
  },
  {
    path: "encapsulation-demo",
    component: EncapsulationDemoComponent,
  },
  {
    path: "interaction-demo-parent",
    component: InteractionDemoParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
