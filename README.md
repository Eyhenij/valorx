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

## Hierarchical Dependency Injection
Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control), allowing a class to receive its dependencies from an external source rather than creating them itself. Angular's DI system is hierarchical, meaning that it allows services to be provided at different levels of the component tree, creating a hierarchy of injectors.

### How Hierarchical Dependency Injection Works

In Angular, services can be provided at various levels:

1. **Root Level:**
    - Services provided at the root level are singletons and are shared across the entire application. This is achieved by using the `providedIn: 'root'` syntax in the service's `@Injectable` decorator.
    - Example:
      ```typescript
      @Injectable({
        providedIn: 'root'
      })
      export class DataService {
        // Service implementation
      }
      ```

2. **Module Level:**
    - Services can also be provided in specific Angular modules. This is done by adding the service to the `providers` array of the module's metadata.
    - Example:
      ```typescript
      @NgModule({
        providers: [DataService]
      })
      export class SomeModule { }
      ```

3. **Component Level:**
    - Services can be provided at the component level, making them available only to that component and its children. This is done by adding the service to the `providers` array of the component's metadata.
    - Example:
      ```typescript
      @Component({
        selector: 'app-some-component',
        providers: [DataService]
      })
      export class SomeComponent {
        constructor(private readonly dataService: DataService) {}
      }
      ```

### Benefits of Hierarchical Dependency Injection

1. **Scoped Services:**
    - By providing services at different levels, Angular allows for scoped services. A service provided at the component level is unique to that component and its children, preventing unintended sharing of state across unrelated parts of the application.

2. **Optimized Resource Usage:**
    - Services provided at the root level are singletons, ensuring that only one instance of the service exists, which can be more memory-efficient. Component-level services are instantiated only when needed, optimizing resource usage.

3. **Encapsulation:**
    - Component-level services help encapsulate functionality and state within specific parts of the application, promoting better separation of concerns and modularity.
