import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {
    @Input({ required: true })
    public title: string = 'Default Child Title';

    @Input({ required: true })
    public description: string = 'Default Child Description';

    @Input({ required: true })
    public childObjectData: { value: string } = { value: `Initial ${this.title} Object Data` };

    @Input()
    public childPrimitiveData: string = 'Initial Child Primitive Data';

    public ngOnChanges(changes: SimpleChanges): void {
        console.warn(this.title, changes);
    }

    public updateChildData(): void {
        this.childObjectData.value = `Updated ${this.title} Object Data`;
        this.childPrimitiveData = `Updated ${this.title} Primitive Data`;
    }
}
