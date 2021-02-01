import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcenterComponent } from './projectcenter.component';

describe('ProjectcenterComponent', () => {
  let component: ProjectcenterComponent;
  let fixture: ComponentFixture<ProjectcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
