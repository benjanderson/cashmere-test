import { Component, ViewEncapsulation, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { PopoverContentComponent } from '@healthcatalyst/cashmere';

/** The datepicker allows user to select a date or date range by choosing dates from a calendar.*/
@Component({
    selector: 'hc-datepicker',
    templateUrl: './hc-datepicker.html',
    styleUrls: ['./hc-datepicker.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HcDatepickerComponent implements OnInit {
    _pickerMode = 1;

    @ViewChild(PopoverContentComponent) popoverContentComponent: PopoverContentComponent;

    constructor() {}

    ngOnInit(): void {
        this.popoverContentComponent._popperOptions = {
            placement: 'bottom',
            hideOnScroll: false,
        };
    }

    _togglePicker(newMode: number) {
        this._pickerMode = newMode;
    }

    _yearSelected() {
        this._pickerMode = 3;
    }

    _monthSelected() {
        this._pickerMode = 1;
    }
}
