import { Injectable } from '@angular/core';
import { DateRangeOptions } from '../model/model';

@Injectable()
export class ConfigStoreService {
    private _dateRangeOptions: DateRangeOptions;
    private defaultOptions = {
        excludeWeekends: false,
        locale: 'en-US',
        fromMinMax: { fromDate: null, toDate: null },
        toMinMax: { fromDate: null, toDate: null }
    };

    constructor() {}

    get DateRangeOptions(): DateRangeOptions {
        return this._dateRangeOptions;
    }

    set DateRangeOptions(options: DateRangeOptions) {
        this._dateRangeOptions = { ...this.defaultOptions, ...options };
    }
}
