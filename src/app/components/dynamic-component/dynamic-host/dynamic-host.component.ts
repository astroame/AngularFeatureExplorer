import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { DynamicChildComponent } from "../dynamic-child/dynamic-child.component";

@Component({
  selector: "app-dynamic-host",
  templateUrl: "./dynamic-host.component.html",
  styleUrls: ["./dynamic-host.component.sass"],
})
export class DynamicHostComponent {
  @ViewChild("dynamicContainer", { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}
  loadComponent() {
    const factory = this.resolver.resolveComponentFactory(
      DynamicChildComponent
    );
    const componentRef = this.container.createComponent(factory);
    componentRef.instance.data = "Hello from Dynamic Component";
    componentRef.instance.data2 = "Hello from Dynamic Component 2";
    componentRef.instance.changeData2("Hello from Dynamic Component 3");
  }

  clearComponents() {
    this.container.clear();
  }
}
