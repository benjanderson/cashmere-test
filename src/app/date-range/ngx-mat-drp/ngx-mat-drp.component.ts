import {
    OnInit,
    Output,
    EventEmitter,
    Input,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    ElementRef,
    Directive
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { OverlayRef } from '@angular/cdk/overlay';
import { CalendarOverlayService } from '../services/calendar-overlay.service';
import { RangeStoreService } from '../services/range-store.service';
import { Range, NgxDrpOptions } from '../model/model';
import { ConfigStoreService } from '../services/config-store.service';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[ngx-mat-drp]',
    host: {
        '(click)': '_onClick($event)'
    },
    providers: [CalendarOverlayService, RangeStoreService, ConfigStoreService, DatePipe]
})
export class NgxMatDrpComponent implements OnInit, OnDestroy {
    @Output()
    readonly selectedDateRangeChanged: EventEmitter<Range> = new EventEmitter<Range>();
    @Input()
    options: NgxDrpOptions;
    private rangeUpdate$: Subscription;
    selectedDateRange = '';

    private _overlayRef: OverlayRef;

    constructor(
        private _elementRef: ElementRef<HTMLInputElement>,
        private changeDetectionRef: ChangeDetectorRef,
        private calendarOverlayService: CalendarOverlayService,
        public rangeStoreService: RangeStoreService,
        public configStoreService: ConfigStoreService,
        private datePipe: DatePipe
    ) {}

    ngOnInit() {
        this.configStoreService.ngxDrpOptions = this.options;
        this.options.placeholder = this.options.placeholder || 'Choose a date';
        this.rangeUpdate$ = this.rangeStoreService.rangeUpdate$.subscribe(range => {
            const from: string = this.formatToDateString(range.fromDate, this.options.format);
            const to: string = this.formatToDateString(range.toDate, this.options.format);
            this.selectedDateRange = `${from} - ${to}`;
            this.selectedDateRangeChanged.emit(range);
        });

        this.rangeStoreService.updateRange(this.options.range.fromDate, this.options.range.toDate);
        this.changeDetectionRef.detectChanges();
    }

    ngOnDestroy() {
        if (this.rangeUpdate$) {
            this.rangeUpdate$.unsubscribe();
        }

        if (this._overlayRef) {
            this._overlayRef.detach();
        }
    }

    private formatToDateString(date: Date, format: string): string {
        return this.datePipe.transform(date, format);
    }

    _onClick($event) {
        this._overlayRef = this.calendarOverlayService.open(this._elementRef);
    }

    public resetDates(range: Range) {
        this.rangeStoreService.updateRange(range.fromDate, range.toDate);
    }
}
