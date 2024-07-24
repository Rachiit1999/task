import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsumerComponent } from './edit-consumer.component';

describe('EditConsumerComponent', () => {
  let component: EditConsumerComponent;
  let fixture: ComponentFixture<EditConsumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditConsumerComponent]
    });
    fixture = TestBed.createComponent(EditConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
