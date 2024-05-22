import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LifecycleDemoComponent } from "./lifecycle-demo/lifecycle-demo.component";
import { EncapsulationDemoComponent } from "./encapsulation-demo/encapsulation-demo.component";

const routes: Routes = [
  {
    path: "lifecycle-demo",
    component: LifecycleDemoComponent,
  },
  {
    path: "encapsulation-demo",
    component: EncapsulationDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
