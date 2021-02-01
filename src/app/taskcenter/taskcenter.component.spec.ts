import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcenterComponent } from './taskcenter.component';

describe('TaskcenterComponent', () => {
  let component: TaskcenterComponent;
  let fixture: ComponentFixture<TaskcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
