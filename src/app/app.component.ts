import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    username = 'Ben A';

    pageSize = 0;
    totalMembers = 0;
    maxPageSize = 50;
    availablePageSizes = [1, 2, 3, 4];

    onSearchChanged(value) {
        console.log(value);
    }

    ngOnInit(): void {}
}
