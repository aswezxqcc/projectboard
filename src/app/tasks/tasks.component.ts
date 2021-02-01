import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskItem, TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
  task: TaskItem = {}
  constructor(public router: ActivatedRoute, public taskservice: TasksService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('id'))
    this.task = this.taskservice.getTask(Number(this.router.snapshot.paramMap.get('id')))
  }

}
