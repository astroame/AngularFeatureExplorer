import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';

const routes: Routes = [
  {
    path: 'lifecycle-demo',
    component: LifecycleDemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
