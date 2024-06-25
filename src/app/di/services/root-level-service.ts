import { Injectable } from '@angular/core';
import { CommonServiceInterface } from '../util/common-service.interface';

@Injectable({
    providedIn: 'root'
})
export class RootLevelService implements CommonServiceInterface {
    private data: string = 'Root level Data';

    getData(): string {
        return this.data;
    }
}
