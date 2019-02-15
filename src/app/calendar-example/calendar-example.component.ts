import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hc-calendar-example',
  templateUrl: './calendar-example.component.html',
  styleUrls: ['./calendar-example.component.scss']
})
export class CalendarExampleComponent implements OnInit {
  min = new Date(2009, 0, 1);
  max = new Date(2011, 0, 1);

  constructor() { }

  date1 = new Date(2010, 1, 1);
  date2 = new Date(2010, 1, 1);
  date = new FormControl(new Date(2010, 1, 1));
  ngOnInit() {
  }

}
