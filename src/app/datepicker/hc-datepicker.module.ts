import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, IconModule } from '@healthcatalyst/cashmere';
import { MatDialogModule } from '../dialog/dialog-module';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { MatCalendar, MatCalendarHeader } from './calendar/calendar.component';
import { MatCalendarBody } from './calendar-body/calendar-body.component';
import { MatDatepicker, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from './hc-datepicker.component';
import { MatDatepickerContent } from './datepicker-content/datepicker-content.component';
import { MatDatepickerToggle, MatDatepickerToggleIcon } from './datepicker-toggle/datepicker-toggle.component';
import { MatMonthView } from './month-view/month-view.component';
import { MatYearView } from './year-view/year-view.component';
import { MatMultiYearView } from './multi-year-view/multi-year-view.component';
import { MatDatepickerIntl } from './datepicker-intl';
import { DatepickerInputDirective } from './datepicker-input/datepicker-input.directive';


@NgModule({
    imports: [CommonModule, ButtonModule, IconModule, MatDialogModule, OverlayModule, A11yModule, PortalModule],
    exports: [
        MatCalendar,
        MatCalendarBody,
        MatDatepicker,
        MatDatepickerContent,
        DatepickerInputDirective,
        MatDatepickerToggle,
        MatDatepickerToggleIcon,
        MatMonthView,
        MatYearView,
        MatMultiYearView,
        MatCalendarHeader
    ],
    declarations: [
        MatCalendar,
        MatCalendarBody,
        MatDatepicker,
        MatDatepickerContent,
        DatepickerInputDirective,
        MatDatepickerToggle,
        MatDatepickerToggleIcon,
        MatMonthView,
        MatYearView,
        MatMultiYearView,
        MatCalendarHeader
    ],
    providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
    entryComponents: [MatDatepickerContent, MatCalendarHeader]
})
export class MatDatepickerModule {}
