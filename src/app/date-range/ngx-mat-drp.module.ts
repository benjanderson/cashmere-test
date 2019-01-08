import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatDrpDirective } from './ngx-mat-drp/ngx-mat-drp.component';
import { PickerOverlayComponent } from './picker-overlay/picker-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { DATE } from './services/range-store.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule, InputModule, FormFieldModule, RadioButtonModule } from '@healthcatalyst/cashmere';
import { MatNativeDateModule } from '../datepicker/datetime';
import { MatDatepickerModule } from '../datepicker/hc-datepicker.module';

@NgModule({
    imports: [
        CommonModule,
        FormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        InputModule,
        ButtonModule,
        RadioButtonModule,
        OverlayModule,
        FormsModule
    ],
    declarations: [NgxMatDrpDirective, CalendarWrapperComponent, PickerOverlayComponent],
    providers: [{ provide: DATE, useValue: new Date() }],
    entryComponents: [PickerOverlayComponent],
    exports: [NgxMatDrpDirective]
})
export class NgxMatDrpModule {}
