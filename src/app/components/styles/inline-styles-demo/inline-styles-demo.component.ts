import { Component } from "@angular/core";

@Component({
  selector: "app-inline-styles-demo",
  template: `
    <div class="inline-styles-demo">
      <h3>Inline Styles Demo</h3>
      <p>This component uses inline styles.</p>
    </div>
  `,
  styles: [
    `
    .inline-styles-demo
        background-color: lightcoral
        border: 2px solid darkred
        padding: 10px
        margin: 10px 0

    h3
        color: darkred

    p
        font-weight: bold

    `,
  ],
})
export class InlineStylesDemoComponent {}
