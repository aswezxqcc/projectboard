import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.less']
})
export class MytaskComponent implements OnInit {
  tasklist: any[]
  constructor(public taskservice: TasksService) {
    this.tasklist = taskservice.getTaskList();
  }

  ngOnInit(): void {
  }

}
