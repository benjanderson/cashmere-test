import { Component, ViewEncapsulation, ChangeDetectionStrategy, AfterViewInit, ViewChild } from '@angular/core';
import { matDatepickerAnimations } from '../datepicker-animations';
import { MatCalendar } from '../calendar/calendar.component';
import { MatDatepicker } from '../hc-datepicker.component';

/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
@Component({
    // moduleId: module.id,
    selector: 'mat-datepicker-content',
    templateUrl: './datepicker-content.component.html',
    host: {
        class: 'mat-datepicker-content',
        '[@transformPanel]': '"enter"',
        '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
    },
    animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
    exportAs: 'matDatepickerContent',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatDatepickerContent implements AfterViewInit {
    /** Reference to the internal calendar component. */
    @ViewChild(MatCalendar) _calendar: MatCalendar;

    /** Reference to the datepicker that created the overlay. */
    datepicker: MatDatepicker;

    /** Whether the datepicker is above or below the input. */
    _isAbove: boolean;

    ngAfterViewInit() {
        this._calendar.focusActiveCell();
    }
}
