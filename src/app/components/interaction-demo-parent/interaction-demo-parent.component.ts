import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/message.service';

@Component({
  selector: 'app-interaction-demo-parent',
  templateUrl: './interaction-demo-parent.component.html',
  styleUrls: ['./interaction-demo-parent.component.sass']
})
export class InteractionDemoParentComponent implements OnInit {
  parentMessage = 'Message from Parent to Child';
  messageFromChild: string | undefined;
  messageFromChildViaService: string | undefined;
  
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
      this.messageService.currentMessage.subscribe(message => this.messageFromChildViaService = message);
  }

  receiveMessage($event: string) {
    this.messageFromChild = $event;
  }
}
