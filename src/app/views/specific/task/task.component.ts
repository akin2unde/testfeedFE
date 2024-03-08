import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent extends BaseComponent {
  constructor(private pgRoute:Router, appUtil:AppUtilService) {
    super(pgRoute,appUtil);
  }
}
