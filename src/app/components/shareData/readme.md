# Sharing Data Between Child and Parent Components

- @Input() decorator (Ref: interaction-demo-parent & interaction-demo-child)

- @Output() decorator and EventEmitter (Ref: interaction-demo-parent & interaction-demo-child)

- ViewChild and ContentChild decorators

- Two-way data binding with @Input and @Output



# ViewChild and ContentChild Decorators
The `@ViewChild` and `@ContentChild `decorators allow a parent component to access a child component’s properties and methods.

Two-way Data Binding with `@Input` and `@Output`
Two-way data binding can be achieved by combining `@Input` and `@Output`.


# Explanation
- `@Input():` Passes data from a parent component to a child component.
- `@Output() and EventEmitter:` Allows a child component to send events and data to a parent component.
- `ViewChild and ContentChild:` Access child component properties and methods from a parent component.
- `Two-way Data Binding:` Achieved by combining @Input and @Output to create a binding between parent and child components.