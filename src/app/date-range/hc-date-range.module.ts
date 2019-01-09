import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeDirective } from './date-range/hc-date-range.component';
import { PickerOverlayComponent } from './picker-overlay/picker-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { DATE } from './services/range-store.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule, InputModule, FormFieldModule, RadioButtonModule } from '@healthcatalyst/cashmere';
import { HcNativeDateModule } from '../datepicker/datetime';
import { HcDatepickerModule } from '../datepicker/hc-datepicker.module';

@NgModule({
    imports: [
        CommonModule,
        FormFieldModule,
        HcDatepickerModule,
        HcNativeDateModule,
        InputModule,
        ButtonModule,
        RadioButtonModule,
        OverlayModule,
        FormsModule
    ],
    declarations: [DateRangeDirective, CalendarWrapperComponent, PickerOverlayComponent],
    providers: [{ provide: DATE, useValue: new Date() }],
    entryComponents: [PickerOverlayComponent],
    exports: [DateRangeDirective]
})
export class DateRangeModule {}
