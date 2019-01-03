import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatDrpComponent } from './ngx-mat-drp/ngx-mat-drp.component';
import { PickerOverlayComponent } from './picker-overlay/picker-overlay.component';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatTooltipModule } from '@angular/material/tooltip';
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
  declarations: [
    NgxMatDrpComponent,
    CalendarWrapperComponent,
    PickerOverlayComponent
  ],
  providers: [
    {provide: DATE, useValue: new Date()}
  ],
  entryComponents: [PickerOverlayComponent],
  exports: [NgxMatDrpComponent]
})
export class NgxMatDrpModule { }
