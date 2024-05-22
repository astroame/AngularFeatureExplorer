import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-lifecycle-demo",
  templateUrl: "./lifecycle-demo.component.html",
  styleUrls: ["./lifecycle-demo.component.sass"],
})
export class LifecycleDemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: string | undefined;
  constructor() {
    console.log("Constructor called");
  }

  /**
   * Called whenever data-bound input properties change. It receives a SimpleChanges object containing the current and previous property values.
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called", changes);
  }
  /**
   * Called once the component is initialized. Ideal for fetching initial data.
   */
  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  /**
   * Called during every change detection run. It allows custom change detection logic.
   */
  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  /**
   * Called once after Angular has fully processed content projected into the component.
   */
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }

  /**
   * Called after every check of the projected content.
   */
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  /**
   * Called once after Angular has fully initialized the component's view.
   */
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
  /**
   * Called after every check of the component's view.
   */
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
  /**
   * Called just before Angular destroys the component. Useful for cleanup, such as unsubscribing from observables.
   */
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }
}
