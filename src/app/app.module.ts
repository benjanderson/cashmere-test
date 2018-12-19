import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CashmereModule } from './cashmere.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CalendarExampleComponent } from './calendar-example/calendar-example.component';
import { DatepickerModule } from './datepicker/hc-datepicker.module';

@NgModule({
  declarations: [
    AppComponent,
    CalendarExampleComponent
  ],
  imports: [
    BrowserModule,
    CashmereModule,
    DatepickerModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: AppComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
