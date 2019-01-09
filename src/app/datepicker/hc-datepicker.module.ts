import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, IconModule } from '@healthcatalyst/cashmere';
import { HcDialogModule } from '../dialog/dialog-module';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { HcCalendar, HcCalendarHeader } from './calendar/calendar.component';
import { HcCalendarBody } from './calendar-body/calendar-body.component';
import { HcDatepicker, HC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from './hc-datepicker.component';
import { HcDatepickerContent } from './datepicker-content/datepicker-content.component';
import { HcDatepickerToggle, hcDatepickerToggleIcon } from './datepicker-toggle/datepicker-toggle.component';
import { HcMonthView } from './month-view/month-view.component';
import { HcYearView } from './year-view/year-view.component';
import { HcMultiYearView } from './multi-year-view/multi-year-view.component';
import { HcDatepickerIntl } from './datepicker-intl';
import { DatepickerInputDirective } from './datepicker-input/datepicker-input.directive';


@NgModule({
    imports: [CommonModule, ButtonModule, IconModule, HcDialogModule, OverlayModule, A11yModule, PortalModule],
    exports: [
        HcCalendar,
        HcCalendarBody,
        HcDatepicker,
        HcDatepickerContent,
        DatepickerInputDirective,
        HcDatepickerToggle,
        hcDatepickerToggleIcon,
        HcMonthView,
        HcYearView,
        HcMultiYearView,
        HcCalendarHeader
    ],
    declarations: [
        HcCalendar,
        HcCalendarBody,
        HcDatepicker,
        HcDatepickerContent,
        DatepickerInputDirective,
        HcDatepickerToggle,
        hcDatepickerToggleIcon,
        HcMonthView,
        HcYearView,
        HcMultiYearView,
        HcCalendarHeader
    ],
    providers: [HcDatepickerIntl, HC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
    entryComponents: [HcDatepickerContent, HcCalendarHeader]
})
export class HcDatepickerModule {}
