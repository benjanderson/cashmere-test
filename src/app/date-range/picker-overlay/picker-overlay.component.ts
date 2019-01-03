import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { PresetItem, NgxDrpOptions } from '../model/model';
import { RangeStoreService } from '../services/range-store.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { ConfigStoreService } from '../services/config-store.service';
import { RadioButtonChangeEvent, RadioGroupDirective } from '@healthcatalyst/cashmere';
import { Range } from '../model/model';

@Component({
    selector: 'ngx-mat-drp-picker-overlay',
    templateUrl: './picker-overlay.component.html',
    styleUrls: ['./picker-overlay.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PickerOverlayComponent implements OnInit {
    fromDate: Date;
    toDate: Date;
    fromMinDate: Date;
    fromMaxDate: Date;
    toMinDate: Date;
    toMaxDate: Date;
    presets: Array<PresetItem> = [];
    startDatePrefix: string;
    endDatePrefix: string;
    applyLabel: string;
    cancelLabel: string;
    shouldAnimate: string;
    selectedPreset: Range | null;

    constructor(
        private rangeStoreService: RangeStoreService,
        private configStoreService: ConfigStoreService,
        private overlayRef: OverlayRef
    ) {}

    ngOnInit() {
        this.fromDate = this.rangeStoreService.fromDate;
        this.toDate = this.rangeStoreService.toDate;
        this.startDatePrefix = this.configStoreService.ngxDrpOptions.startDatePrefix || 'Start Date';
        this.endDatePrefix = this.configStoreService.ngxDrpOptions.endDatePrefix || 'End Date';
        this.applyLabel = this.configStoreService.ngxDrpOptions.applyLabel || 'Apply';
        this.cancelLabel = this.configStoreService.ngxDrpOptions.cancelLabel || 'Cancel';
        this.presets = this.configStoreService.ngxDrpOptions.presets;
        ({ fromDate: this.fromMinDate, toDate: this.fromMaxDate } = this.configStoreService.ngxDrpOptions.fromMinMax);
        ({ fromDate: this.toMinDate, toDate: this.toMaxDate } = this.configStoreService.ngxDrpOptions.toMinMax);
    }

    updateFromDate(date) {
        this.fromDate = date;
        this.selectedPreset = null;
    }

    updateToDate(date) {
        this.toDate = date;
        this.selectedPreset = null;
    }

    updateRangeByPreset(presetItem: RadioButtonChangeEvent) {
        const range: Range = presetItem.value;
        this.fromDate = range.fromDate;
        this.toDate = range.toDate;
    }

    applyNewDates(e) {
        this.rangeStoreService.updateRange(this.fromDate, this.toDate);
        this.disposeOverLay();
    }

    discardNewDates(e) {
        this.disposeOverLay();
    }

    private disposeOverLay() {
        this.overlayRef.dispose();
    }
}
