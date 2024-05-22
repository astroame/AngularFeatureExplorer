import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ComponentModule } from '../components/component.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    ComponentModule
  ],
  exports: [CoreModule, ComponentModule]
})
export class SharedModule { }
