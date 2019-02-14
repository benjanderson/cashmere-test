import { Component, OnInit, ViewChild } from '@angular/core';
import { DateRangeOptions, PresetItem } from '../date-range/model/model';
import { DateRange } from '../date-range/model/model';

@Component({
    selector: 'hc-date-range-example',
    templateUrl: './date-range-example.component.html',
    styleUrls: ['./date-range-example.component.css']
})
export class DateRangeExampleComponent implements OnInit {
    range: DateRange = { fromDate: new Date(), toDate: new Date() };
    options: DateRangeOptions;
    presets: Array<PresetItem> = [];
    @ViewChild('pickerOne') pickerOne;

    ngOnInit() {
        const today = new Date();
        const backDate = numOfDays => {
            const now = new Date();
            return new Date(now.setDate(now.getDate() - numOfDays));
        };

        const fromMin = new Date(today.getFullYear(), today.getMonth() - 2, 1);
        const fromMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const toMin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const toMax = new Date(today.getFullYear(), today.getMonth() + 2, 0);

        const yesterday = backDate(1);
        const minus7 = backDate(7);
        const minus30 = backDate(30);
        const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        const currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
        this.options = {
            presets: [
                {
                    presetLabel: 'Yesterday',
                    range: { fromDate: yesterday, toDate: today }
                },
                {
                    presetLabel: 'Last 7 Days',
                    range: { fromDate: minus7, toDate: today }
                },
                {
                    presetLabel: 'Last 30 Days',
                    range: { fromDate: minus30, toDate: today }
                },
                {
                    presetLabel: 'This Month',
                    range: { fromDate: currMonthStart, toDate: currMonthEnd }
                },
                {
                    presetLabel: 'Last Month',
                    range: { fromDate: lastMonthStart, toDate: lastMonthEnd }
                }
            ],
            fromMinMax: { fromDate: fromMin, toDate: fromMax },
            toMinMax: { fromDate: toMin, toDate: toMax }
        };
    }

    updateRange(range: DateRange) {
        this.range = range;
    }
}
