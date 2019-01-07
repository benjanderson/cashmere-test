import {
    Component,
    ViewChild,
    Input,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    OnInit,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { ConfigStoreService } from '../services/config-store.service';
import { MatCalendar } from 'src/app/datepicker/calendar/calendar.component';
import { DatepickerInputDirective, MatDatepickerInputEvent } from 'src/app/datepicker/datepicker-input/datepicker-input.directive';
import { D } from 'src/app/datepicker/datetime/date-formats';

@Component({
    selector: 'calendar-wrapper',
    templateUrl: './calendar-wrapper.component.html',
    styleUrls: ['./calendar-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CalendarWrapperComponent implements OnInit, OnChanges {
    @ViewChild(MatCalendar)
    matCalendar: MatCalendar;

    @ViewChild(DatepickerInputDirective)
    datePickerInput: DatepickerInputDirective;

    @Output()
    readonly selectedDateChange: EventEmitter<D> = new EventEmitter<D>();

    @Input()
    selectedDate: D;

    _dateFormat: string;

    @Input() prefixLabel: string;
    @Input() minDate: D;
    @Input() maxDate: D;
    weekendFilter = (d: D) => true;

    constructor(configStore: ConfigStoreService) {
        this._dateFormat = configStore.ngxDrpOptions.format;
        if (configStore.ngxDrpOptions.excludeWeekends) {
            this.weekendFilter = (d: Date): boolean => {
                const day = d.getDay();
                return day !== 0 && day !== 6;
            };
        }
    }

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges) {
        // Necessary to force view refresh
        const date: D = changes.selectedDate.currentValue;
        if (date) {
            this.matCalendar.activeDate = date;
            this.datePickerInput.setDate(date);
            this.selectedDateChange.emit(date);
        }
    }

    onCalendarChange(date: D) {
        this.selectedDateChange.emit(date);
    }

    onInputChange(event: MatDatepickerInputEvent) {
        this.selectedDateChange.emit(event.value);
    }
}
