import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hc-calendar-example',
  templateUrl: './calendar-example.component.html',
  styleUrls: ['./calendar-example.component.scss']
})
export class CalendarExampleComponent implements OnInit {

  constructor() { }

  date1 = new Date(2010, 1, 1);
  date2 = new Date(2010, 1, 1);

  ngOnInit() {
  }

}
