# Explanation of Lifecycle Hooks

`ngOnChanges:` Called whenever data-bound input properties change. It receives a SimpleChanges object containing the current and previous property values.

`ngOnInit:` Called once the component is initialized. Ideal for fetching initial data.

`ngDoCheck:` Called during every change detection run. It allows custom change detection logic.

`ngAfterContentInit:` Called once after Angular has fully processed content projected into the component.

`ngAfterContentChecked:` Called after every check of the projected content.

`ngAfterViewInit:` Called once after Angular has fully initialized the component's view.

`ngAfterViewChecked:` Called after every check of the component's view.

`ngOnDestroy:` Called just before Angular destroys the component. Useful for cleanup, such as unsubscribing from observables.