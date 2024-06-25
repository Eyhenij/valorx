# Valorx

## Change Detection Strategies
The purpose of change detection is essentially the possibility to make changes of components’ properties (i.e. data model) reflected in the DOM.
Angular provides two change detection strategies: Default and OnPush. 

### Default Change Detection Strategy
Angular executes change detection on the entire component tree. 
Angular will skip descendant component subtrees with roots using OnPush, which have not received new inputs.

### OnPush Change Detection Strategy
OnPush change detection instructs Angular to run change detection for a component subtree only when:

- The root component of the subtree receives new inputs as the result of a template binding. Angular compares the current and past value of the input with == operator.
- Angular handles an event (for example using event binding, output binding, or @HostListener ) in the subtree's root component or any of its children whether they are using OnPush change detection or not.
- Developers can manually trigger change detection using Angular's `ChangeDetectorRef` service. This is useful for scenarios where changes occur outside of Angular's default change detection mechanisms (e.g., asynchronous operations).

### Demonstration

#### Child #1 (OnPush change detection strategy):
- Despite the fact that the input property `childObjectData` has a default value, the parent component passes a new value, 
which is displayed in the UI of the child component, after the parent updates the value in the `parentObjectData.value` field,
the child component does not trigger change detection if the input has not changed, there still a reference to the same object.
So, the model in controller has been changed, but the view has not been updated.
Input property `childPrimitiveData` of the child component does not change because the parent component does not pass anything to the input.

#### Child #2 (OnPush change detection strategy):
- The parent component passes a new object to the child component, which is displayed in the UI of the child component, 
after the parent updates the value in the `parentObjectData.value` AND `childPrimitiveData` fields, the child component trigger change detection (!), 
it happens because the parent component passes a new value to the input property `childPrimitiveData` of the child component.
So, the model in controller has been changed, and the view has been updated.

#### Child #3 (Default change detection strategy):
- The parent component passes a new object to the child component, which is displayed in the UI of the child component,
every time the parent updates the value in the `parentObjectData.value` or `childPrimitiveData` fields,
the child component trigger change detection (!). So, the model in controller has been changed, and the view has been updated on every change of `parentObjectData.value` (!!).

### How Change Detection Strategy impact app performance

#### Default Change Detection Strategy is suitable for:
- Small to Medium Applications: Suitable for applications with a relatively small number of components where performance is not a critical concern.
- Rapid Development: Ideal for rapid development and prototyping, where ease of use and simplicity are prioritized over performance optimization.

#### OnPush Change Detection Strategy is suitable for:
- Large Applications: Suitable for large applications with many components where performance is a critical concern.
- Performance Optimization: Ideal for performance-sensitive parts of the application, such as frequently updated lists or complex UI components.
- Immutable Data: Works well with applications that use immutable data structures or state management libraries like NgRx.

### Conclusion
The OnPush change detection strategy can significantly improve the performance of Angular applications by reducing the number of change detection cycles and DOM updates.
