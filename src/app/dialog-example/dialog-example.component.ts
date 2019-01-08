import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '../dialog/dialog';
import { MatDialogRef } from '../dialog/dialog-ref';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'hc-dialog-example',
    templateUrl: './dialog-example.component.html',
    styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
    animal: string;
    name: string;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {}

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}

@Component({
    selector: 'dialog-overview-example-dialog',
    template: `<h1 hc-dialog-title>Hi {{data.name}}</h1>
    <div hc-dialog-content>
      <p>What's your favorite animal?</p>
      <hc-form-field>
        <input hcInput [(ngModel)]="data.animal">
      </hc-form-field>
    </div>
    <div hc-dialog-actions>
      <button hCbutton (click)="onNoClick()">No Thanks</button>
      <button hCbutton [hc-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
    </div>`
})
export class DialogOverviewExampleDialog {
    constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
