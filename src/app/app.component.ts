import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'projectboard';
  menuList = [
    {
      name: '首页',
      routerLink: 'homepage'
    },
    {
      name:'任务中心',
      routerLink:'taskcenter'
    },
    {
      name:'项目中心',
      routerLink:'projectcenter'
    }
  ]
}
