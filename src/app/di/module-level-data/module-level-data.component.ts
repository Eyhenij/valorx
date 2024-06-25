import { Component, inject } from '@angular/core';
import { ModuleLevelService } from '../services/module-level-service';
import { CommonServiceInterface } from '../util/common-service.interface';
import { RootLevelService } from '../services/root-level-service';

@Component({
    selector: 'app-module-level-data',
    standalone: true,
    imports: [],
    providers: [
        {
            provide: RootLevelService,
            useClass: ModuleLevelService
        }
    ],
    templateUrl: './module-level-data.component.html',
    styleUrl: './module-level-data.component.scss'
})
export class ModuleLevelDataComponent {
    readonly #dataService: CommonServiceInterface = inject(RootLevelService);
    public readonly data: string = this.#dataService.getData();
}
