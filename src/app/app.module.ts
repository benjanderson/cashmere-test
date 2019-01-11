import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CashmereModule } from './cashmere.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CalendarExampleComponent } from './calendar-example/calendar-example.component';
import { DatepickerModule } from './datepicker/datepicker.module';
import { DialogExampleComponent, DialogOverviewExampleDialog } from './dialog-example/dialog-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SugarDateModule } from './sugar-date.module';
import { DateRangeExampleComponent } from './date-range-example/date-range-example.component';
import { DateRangeModule } from './date-range/date-range.module';
import { DialogModule } from './dialog/dialog-module';

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
    DatepickerModule,
    DateRangeModule,
    SugarDateModule,
    DialogModule,
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
