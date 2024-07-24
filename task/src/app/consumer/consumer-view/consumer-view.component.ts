import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../consumer';
import { MatDialog } from '@angular/material/dialog';
import { ConsumerAddressDialogComponent } from '../consumer-address-dialog/consumer-address-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { EditConsumerComponent } from '../edit-consumer/edit-consumer.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consumer-view',
  templateUrl: './consumer-view.component.html',
  styleUrls: ['./consumer-view.component.css'],
})
export class ConsumerViewComponent implements OnInit {
  consumers: Consumer[] = [];
  allData: any[] = [];
  dataSource: any[] = [];

  formData: FormGroup;

  totalItems = 0;
  pageSize = 5;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  loadPage(pageIndex: number, pageSize: number) {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + pageSize;
    console.log(startIndex, endIndex, pageIndex, pageSize);

    this.dataSource = this.allData.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.loadPage(event.pageIndex, event.pageSize);
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'website',
    'company',
    'address',
  ];

  constructor(
    private consumerService: ConsumerService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.formData = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      website: [''],
      company: [''],
      address: [''],
    });
  }

  openAddressDialog(address: any): void {
    // console.log(address);
    this.dialog.open(ConsumerAddressDialogComponent, {
      data: address,
    });
  }

  onEdit(consumer: Consumer): void {
    this.formData.patchValue({
      name: consumer.name,
      username: consumer.username,
      email: consumer.email,
      phone: consumer.phone,
      website: consumer.website,
      company: consumer.company,
      address: consumer.address,
    });
    this.dialog.open(EditConsumerComponent, {
      data: this.formData.value,
    });
  }

  ngOnInit(): void {
    this.consumerService.getConsumer().subscribe((data) => {
      this.allData = data;
      this.totalItems = data.length;
      this.loadPage(0, this.pageSize);
    });
  }
}
