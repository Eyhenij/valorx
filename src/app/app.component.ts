import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './change-detection/parent/parent.component';
import { AppDiComponent } from './di/app-di/app-di.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ParentComponent, AppDiComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    public readonly title: string = 'Valorx';
}
