import { Injectable } from '@angular/core';
export interface TaskItem {
  name?: string,
  id?: number
}
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasklist: TaskItem[] = [{
    name: '投标意见收集',
    id: 1
  }, {
    name: '标注格式修改',
    id: 2
  }, {
    name: '标注格式修改4',
    id: 3
  }]
  getTaskList(): TaskItem[] {
    return this.tasklist
  }
  getTask(id: number): TaskItem {
    return this.tasklist.filter(v => v.id === id)[0]
  }
  constructor() { }
}
