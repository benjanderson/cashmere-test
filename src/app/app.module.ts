import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CashmereModule } from './cashmere.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CalendarExampleComponent } from './calendar-example/calendar-example.component';
import { MatDatepickerModule } from './datepicker/hc-datepicker.module';
import { MatDialogModule } from './dialog';
import { DialogExampleComponent, DialogOverviewExampleDialog } from './dialog-example/dialog-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from './datepicker/datetime';
import { SugarDateModule } from './sugar-date.module';
import { DateRangeExampleComponent } from './date-range-example/date-range-example.component';
import { NgxMatDrpModule } from './date-range/ngx-mat-drp.module';

@NgModule({
  declarations: [
    AppComponent,
    CalendarExampleComponent,
    DialogExampleComponent,
    DialogOverviewExampleDialog,
    DateRangeExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CashmereModule,
    MatDatepickerModule,
    NgxMatDrpModule,
    SugarDateModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: AppComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
