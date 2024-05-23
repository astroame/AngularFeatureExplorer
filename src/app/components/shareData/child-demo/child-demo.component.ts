import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.sass']
})
export class ChildDemoComponent {
  // Demo Two-way Data Binding with @Input and @Output
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();
  
  message: string = 'Hello from Child Component';

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
