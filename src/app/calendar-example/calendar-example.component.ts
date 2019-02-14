import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hc-calendar-example',
  templateUrl: './calendar-example.component.html',
  styleUrls: ['./calendar-example.component.scss']
})
export class CalendarExampleComponent implements OnInit {

  constructor() { }

  date1 = new Date(2010, 1, 1);
  date2 = new Date(2010, 1, 1);
  date = new FormControl(new Date(2010, 1, 1));
  ngOnInit() {
  }

}
