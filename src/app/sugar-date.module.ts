import createDate from 'sugar/date/internal/createDate';
import { NativeDateAdapter } from './datepicker/datetime/native-date-adapter';

export class SugarDateAdapter extends NativeDateAdapter {
    parse(value: any): Date | null {
        return createDate(value);
    }
}

import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { DateAdapter } from './datepicker/datetime/date-adapter';
import { MAT_DATE_FORMATS } from './datepicker/datetime/date-formats';
import { MAT_NATIVE_DATE_FORMATS } from './datepicker/datetime/native-date-formats';

@NgModule({
    imports: [PlatformModule],
    providers: [{ provide: DateAdapter, useClass: SugarDateAdapter }]
})
export class NativeDateModule {}

@NgModule({
    imports: [NativeDateModule],
    providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }]
})
export class SugarDateModule {}
