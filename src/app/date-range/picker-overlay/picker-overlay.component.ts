import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { PresetItem } from '../model/model';
import { RangeStoreService } from '../services/range-store.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { ConfigStoreService } from '../services/config-store.service';
import { RadioButtonChangeEvent } from '@healthcatalyst/cashmere';
import { DateRange } from '../model/model';
import { D } from 'src/app/datepicker/datetime';

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
    selectedPreset: DateRange | null;
    _disabled: boolean;

    constructor(
        private rangeStoreService: RangeStoreService,
        private configStoreService: ConfigStoreService,
        private overlayRef: OverlayRef,
        private cd: ChangeDetectorRef
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
        this._setValidity();
    }

    updateFromDate(date: D | null) {
        this.fromDate = date;

        if (this.selectedPreset && this.selectedPreset.fromDate !== date) {
            setTimeout(() => {
                this.selectedPreset = null;
                this.cd.detectChanges();
            });
        }
        this._setValidity();
    }

    updateToDate(date: D | null) {
        this.toDate = date;

        if (this.selectedPreset && this.selectedPreset.toDate !== date) {
            setTimeout(() => {
                this.selectedPreset = null;
                this.cd.detectChanges();
            });
        }
        this._setValidity();
    }

    updateRangeByPreset(presetItem: RadioButtonChangeEvent) {
        const range: DateRange = presetItem.value;
        this.fromDate = range.fromDate;
        this.toDate = range.toDate;
        this._setValidity();
    }

    applyNewDates() {
        if (!!this.toDate && !!this.fromDate) {
            this.rangeStoreService.updateRange(this.fromDate, this.toDate);
        }
        this.overlayRef.dispose();
    }

    discardNewDates(e) {
        this.overlayRef.dispose();
    }

    _setValidity() {
        this._disabled = !this.toDate || !this.fromDate;
    }
}
