import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-consumer',
  templateUrl: './edit-consumer.component.html',
  styleUrls: ['./edit-consumer.component.css'],
})
export class EditConsumerComponent {
  formData: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditConsumerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    // console.log(data);
    this.formData = this.fb.group({
      name: [data.name],
      username: [data.username],
      email: [data.email],
      address: [data.address.street],
      phone: [data.phone],
      website: [data.website],
      company: [data.company.name],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.formData.value);
    this.dialogRef.close(this.formData.value);
  }
}
