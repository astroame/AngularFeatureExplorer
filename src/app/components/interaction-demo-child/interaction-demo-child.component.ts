import { MessageService } from "./../../core/message.service";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-interaction-demo-child",
  templateUrl: "./interaction-demo-child.component.html",
  styleUrls: ["./interaction-demo-child.component.sass"],
})
export class InteractionDemoChildComponent {
  /** Use @Input() to Pass Data from Parent to Child */
  @Input() childMessage: string | undefined;

  /** Use @Output() to Pass Data from Child to Parent */
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private messageService: MessageService) {}

  sendMessage() {
    this.messageEvent.emit("Message from Child to Parent");
    this.messageService.changeMessage("Message from Child via Service");
  }
}
