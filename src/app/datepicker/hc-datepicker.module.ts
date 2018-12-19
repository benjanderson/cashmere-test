import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HcDatepickerComponent } from './hc-datepicker.component';
import { DatepickerToggleComponent } from './datepicker-toggle/datepicker-toggle.component';
import { PopoverModule, IconModule } from '@healthcatalyst/cashmere';

@NgModule({
    imports: [CommonModule, PopoverModule, IconModule],
    exports: [HcDatepickerComponent, DatepickerToggleComponent],
    declarations: [HcDatepickerComponent, DatepickerToggleComponent]
})
export class DatepickerModule {}
