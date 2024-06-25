import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ChildWithDefaultStrategyComponent } from '../child-default/child-with-default-strategy.component';

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [
        ChildComponent,
        ChildWithDefaultStrategyComponent
    ],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss'
})
export class ParentComponent {
    public readonly parentObjectData: { value: string } = { value: 'Initial Parent Object Data' };
    public parentPrimitiveData: string = 'Initial Parent Primitive Data';

    public updateParentData(): void {
        this.parentObjectData.value = 'Updated Parent Object Data';
        this.parentPrimitiveData = 'Updated Parent Primitive Data';
    }
}
