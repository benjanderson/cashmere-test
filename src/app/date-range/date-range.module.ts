import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateRangeDirective} from './date-range/date-range.directive';
import {PickerOverlayComponent} from './picker-overlay/picker-overlay.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {CalendarWrapperComponent} from './calendar-wrapper/calendar-wrapper.component';
import {FormsModule} from '@angular/forms';
import {HcNativeDateModule} from '../datepicker/datetime/datetime.module';
import {DatepickerModule} from '../datepicker/datepicker.module';
import { FormFieldModule, InputModule, ButtonModule, RadioButtonModule } from '@healthcatalyst/cashmere';

@NgModule({
    imports: [
        CommonModule,
        FormFieldModule,
        DatepickerModule,
        HcNativeDateModule,
        InputModule,
        ButtonModule,
        RadioButtonModule,
        OverlayModule,
        FormsModule
    ],
    declarations: [DateRangeDirective, CalendarWrapperComponent, PickerOverlayComponent],
    entryComponents: [PickerOverlayComponent],
    exports: [DateRangeDirective]
})
export class DateRangeModule {}
