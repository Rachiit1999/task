import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-consumer-address-dialog',
  templateUrl: './consumer-address-dialog.component.html',
  styleUrls: ['./consumer-address-dialog.component.css'],
})
export class ConsumerAddressDialogComponent implements OnInit {
  displayedColumns: string[] = ['street', 'suite', 'city', 'zipcode'];
  dataSource: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    // console.log(this.data, 'Hello');
    this.dataSource.push(this.data);
  }
}
