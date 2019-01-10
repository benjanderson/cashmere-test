import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CashmereModule } from './cashmere.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CalendarExampleComponent } from './calendar-example/calendar-example.component';
import { HcDatepickerModule } from './datepicker/hc-datepicker.module';
import { HcDialogModule } from './dialog';
import { DialogExampleComponent, DialogOverviewExampleDialog } from './dialog-example/dialog-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HcNativeDateModule } from './datepicker/datetime/datetime.module';
import { SugarDateModule } from './sugar-date.module';
import { DateRangeExampleComponent } from './date-range-example/date-range-example.component';
import { DateRangeModule } from './date-range/hc-date-range.module';

@NgModule({
  declarations: [
    AppComponent,
    CalendarExampleComponent,
    DialogExampleComponent,
    DialogOverviewExampleDialog,
    DateRangeExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CashmereModule,
    HcDatepickerModule,
    DateRangeModule,
    SugarDateModule,
    HcDialogModule,
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
