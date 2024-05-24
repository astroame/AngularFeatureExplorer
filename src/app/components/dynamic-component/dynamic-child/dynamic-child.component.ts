import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-child',
  templateUrl: './dynamic-child.component.html',
  styleUrls: ['./dynamic-child.component.sass']
})
export class DynamicChildComponent {
  @Input() data: string | undefined;
  data2: string | undefined;

  changeData2(message: string){
    this.data2 = message;
  }

}
