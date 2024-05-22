# components interacts using the following technies

- `@Input()` and `@Output()` properties
- Using a shared service for communication
- EventEmitter for custom events

# services

- core/message.service.ts


# Explanation

- `@Input():` Allows parent components to bind values to properties in child components.
- `@Output() and EventEmitter:` Enables child components to emit events that parent components can listen for.
- `Shared Service:` Provides a way to communicate between components that are not directly related, using a centralized service.
