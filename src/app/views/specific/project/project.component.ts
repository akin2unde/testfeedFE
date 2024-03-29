import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';
import { HttpWebRequestService } from 'src/app/core/services/http-web-request/http-web-request.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent extends BaseComponent {
  constructor(private pgRoute:Router, appUtil:AppUtilService,private httpRequest:HttpWebRequestService) {
    
    super(pgRoute,appUtil,httpRequest);
  }

}
