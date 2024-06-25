import { Injectable } from '@angular/core';
import { CommonServiceInterface } from '../util/common-service.interface';

@Injectable()
export class ComponentLevelService implements CommonServiceInterface {
    private data: string = 'Component level Data';

    getData(): string {
        return this.data;
    }
}
