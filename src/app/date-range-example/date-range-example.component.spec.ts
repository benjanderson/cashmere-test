import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeExampleComponent } from './date-range-example.component';

describe('DateRangeExampleComponent', () => {
    let component: DateRangeExampleComponent;
    let fixture: ComponentFixture<DateRangeExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DateRangeExampleComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DateRangeExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
