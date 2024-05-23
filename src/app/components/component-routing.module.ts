import { InlineStylesDemoComponent } from './styles/inline-styles-demo/inline-styles-demo.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LifecycleDemoComponent } from "./lifecycle-demo/lifecycle-demo.component";
import { EncapsulationDemoComponent } from "./encapsulation-demo/encapsulation-demo.component";
import { InteractionDemoParentComponent } from "./interaction-demo-parent/interaction-demo-parent.component";
import { ExternalStylesDemoComponent } from "./styles/external-styles-demo/external-styles-demo.component";
import { ParentDemoComponent } from './shareData/parent-demo/parent-demo.component';
import { ChildDemoComponent } from './shareData/child-demo/child-demo.component';

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
  },
  {
    path: "external-styles-demo",
    component: ExternalStylesDemoComponent
  },
  {
    path: "inline-styles-demo",
    component: InlineStylesDemoComponent
  },
  {
    path: "share-data-parent-demo",
    component: ParentDemoComponent
  },
  {
    path: "share-data-child-demo",
    component: ChildDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
