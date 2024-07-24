import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerViewComponent } from './consumer-view/consumer-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConsumerAddressDialogComponent } from './consumer-address-dialog/consumer-address-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { EditConsumerComponent } from './edit-consumer/edit-consumer.component';

@NgModule({
  declarations: [
    ConsumerViewComponent,
    ConsumerAddressDialogComponent,
    EditConsumerComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class ConsumerModule {}
