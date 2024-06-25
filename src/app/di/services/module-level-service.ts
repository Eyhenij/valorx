import { Injectable } from '@angular/core';
import { CommonServiceInterface } from '../util/common-service.interface';

@Injectable()
export class ModuleLevelService implements CommonServiceInterface {
    private data: string = 'Module Level Data';

    getData(): string {
        return this.data;
    }
}
