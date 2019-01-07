import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWrapperComponent } from './calendar-wrapper.component';
import { ConfigStoreService } from '../services/config-store.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDatepickerInputEvent } from 'src/app/datepicker/datepicker-input/datepicker-input.directive';

describe('CalendarWrapperComponent', () => {
    let component: CalendarWrapperComponent;
    let fixture: ComponentFixture<CalendarWrapperComponent>;
    let configStoreService: ConfigStoreService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalendarWrapperComponent],
            providers: [ConfigStoreService],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        configStoreService = TestBed.get(ConfigStoreService);
        configStoreService.ngxDrpOptions = {
            presets: this.presets,
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
        expect(component._dateFormat).toEqual(configStoreService.ngxDrpOptions.format);
    });

    it('should setup weekend filter', () => {
        configStoreService.ngxDrpOptions.excludeWeekends = true;
        expect(component.weekendFilter).toBeDefined();
    });

    it('should emit calendar date selection change', () => {
        component.selectedDateChange.subscribe(val => {
            expect(val instanceof Date).toBeTruthy();
        });
        component.onCalendarChange(new Date());
    });

    it('should emit input date selection change', () => {
        component.selectedDateChange.subscribe(val => {
            expect(val instanceof Date).toBeTruthy();
        });
        const change: MatDatepickerInputEvent = new MatDatepickerInputEvent(null, null);
        change.value = new Date();
        component.onInputChange(change);
    });
});
