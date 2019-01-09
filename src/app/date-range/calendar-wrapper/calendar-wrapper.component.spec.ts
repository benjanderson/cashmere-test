import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { CalendarWrapperComponent } from './calendar-wrapper.component';
import { ConfigStoreService } from '../services/config-store.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HcDatepickerInputEvent } from 'src/app/datepicker/datepicker-input/datepicker-input.directive';
import { InputModule, FormFieldModule } from '@healthcatalyst/cashmere';

describe('CalendarWrapperComponent', () => {
    let component: CalendarWrapperComponent;
    let fixture: ComponentFixture<CalendarWrapperComponent>;
    let configStoreService: ConfigStoreService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [InputModule, FormFieldModule],
            declarations: [CalendarWrapperComponent],
            providers: [ConfigStoreService],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        configStoreService = TestBed.get(ConfigStoreService);
        configStoreService.DateRangeOptions = {
            presets: [],
            format: 'mediumDate',
            range: { fromDate: new Date(), toDate: new Date() },
            applyLabel: 'Submit'
        };
        fixture = TestBed.createComponent(CalendarWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set date format from options', () => {
        expect(component._dateFormat).toEqual(configStoreService.DateRangeOptions.format);
    });

    it('should setup weekend filter', () => {
        configStoreService.DateRangeOptions.excludeWeekends = true;
        expect(component.weekendFilter).toBeDefined();
    });

    it('should emit calendar date selection change', () => {
        component.selectedDateChange.subscribe(val => {
            expect(val instanceof Date).toBeTruthy();
        });
        component.onCalendarChange(new Date());
    });

    it('should emit input date selection change', fakeAsync(() => {
        component.selectedDateChange.subscribe(val => {
            expect(val instanceof Date).toBeTruthy();
        });
        component.datePickerInput = <any>{value: new Date()};
        const change: HcDatepickerInputEvent = new HcDatepickerInputEvent(component.datePickerInput, null);
        component.onInputChange(change);
    }));
});
