import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerAddressDialogComponent } from './consumer-address-dialog.component';

describe('ConsumerAddressDialogComponent', () => {
  let component: ConsumerAddressDialogComponent;
  let fixture: ComponentFixture<ConsumerAddressDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerAddressDialogComponent]
    });
    fixture = TestBed.createComponent(ConsumerAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
