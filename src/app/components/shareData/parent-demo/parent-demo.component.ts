import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ChildDemoComponent } from "../child-demo/child-demo.component";

@Component({
  selector: "app-parent-demo",
  templateUrl: "./parent-demo.component.html",
  styleUrls: ["./parent-demo.component.sass"],
})
export class ParentDemoComponent implements AfterViewInit {
  parentCount: number = 0;

  @ViewChild(ChildDemoComponent) child: ChildDemoComponent | undefined;
  ngAfterViewInit() {
    console.log(this.child?.message);
  }

  changeChildMessage() {
    this.child?.changeMessage("Message from Parent Component");
  }
}
