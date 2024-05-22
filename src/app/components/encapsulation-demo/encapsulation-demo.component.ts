import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-demo',
  templateUrl: './encapsulation-demo.component.html',
  styleUrls: ['./encapsulation-demo.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EncapsulationDemoComponent {

}
