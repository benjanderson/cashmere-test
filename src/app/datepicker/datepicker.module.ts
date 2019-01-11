import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, IconModule } from '@healthcatalyst/cashmere';
import { DialogModule } from '../dialog/dialog-module';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { CalendarComponent as CalendarComponent, CalendarHeaderComponent } from './calendar/calendar.component';
import { CalendarBodyComponent as CalendarBodyComponent } from './calendar-body/calendar-body.component';
import { DatepickerComponent as DatepickerComponent, HC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from './datepicker.component';
import { DatepickerContentComponent } from './datepicker-content/datepicker-content.component';
import { DatepickerToggleComponent, DatepickerToggleIconDirective } from './datepicker-toggle/datepicker-toggle.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { YearViewComponent } from './year-view/year-view.component';
import { MultiYearViewComponent } from './multi-year-view/multi-year-view.component';
import { HcDatepickerIntl } from './datepicker-intl';
import { DatepickerInputDirective } from './datepicker-input/datepicker-input.directive';


@NgModule({
    imports: [CommonModule, ButtonModule, IconModule, DialogModule, OverlayModule, A11yModule, PortalModule],
    exports: [
        CalendarComponent,
        CalendarBodyComponent,
        DatepickerComponent,
        DatepickerContentComponent,
        DatepickerInputDirective,
        DatepickerToggleComponent,
        DatepickerToggleIconDirective,
        MonthViewComponent,
        YearViewComponent,
        MultiYearViewComponent,
        CalendarHeaderComponent
    ],
    declarations: [
        CalendarComponent,
        CalendarBodyComponent,
        DatepickerComponent,
        DatepickerContentComponent,
        DatepickerInputDirective,
        DatepickerToggleComponent,
        DatepickerToggleIconDirective,
        MonthViewComponent,
        YearViewComponent,
        MultiYearViewComponent,
        CalendarHeaderComponent
    ],
    providers: [HcDatepickerIntl, HC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
    entryComponents: [DatepickerContentComponent, CalendarHeaderComponent]
})
export class DatepickerModule {}
