import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent extends BaseComponent {
  constructor(private pgRoute:Router, appUtil:AppUtilService) {
    
    super(pgRoute,appUtil);
  }

}
