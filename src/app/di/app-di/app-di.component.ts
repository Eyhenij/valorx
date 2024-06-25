import { Component, inject } from '@angular/core';
import { CommonServiceInterface } from '../util/common-service.interface';
import { RootLevelService } from '../services/root-level-service';
import { ModuleLevelDataComponent } from '../module-level-data/module-level-data.component';
import { ComponentLevelDataComponent } from '../component-level-data/component-level-data.component';

@Component({
  selector: 'app-di',
  standalone: true,
  imports: [
    ModuleLevelDataComponent,
    ComponentLevelDataComponent
  ],
  templateUrl: './app-di.component.html',
  styleUrl: './app-di.component.scss'
})
export class AppDiComponent {
  readonly #dataService: CommonServiceInterface = inject(RootLevelService);
  public readonly data: string = this.#dataService.getData();
}
