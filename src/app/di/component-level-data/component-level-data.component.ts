import { Component, inject } from '@angular/core';
import { ComponentLevelService } from '../services/component-level-service';
import { CommonServiceInterface } from '../util/common-service.interface';
import { ModuleLevelService } from '../services/module-level-service';
import { RootLevelService } from '../services/root-level-service';

@Component({
    selector: 'app-component-level-data',
    standalone: true,
    imports: [],
    providers: [
        {
            provide: ModuleLevelService,
            useClass: ComponentLevelService
        }
    ],
    templateUrl: './component-level-data.component.html',
    styleUrl: './component-level-data.component.scss'
})
export class ComponentLevelDataComponent {
    readonly #dataService: CommonServiceInterface = inject(ModuleLevelService);
    readonly #rootDataService: CommonServiceInterface = inject(RootLevelService);

    public readonly data: string = this.#dataService.getData();
    public readonly rootData: string = this.#rootDataService.getData();
}
