import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';
import { HttpWebRequestService } from 'src/app/core/services/http-web-request/http-web-request.service';
import { ErrorResponse } from 'src/app/models/ErrorResponse';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent extends BaseComponent {
  projects:Project[]=[];
  constructor(private pgRoute:Router, appUtil:AppUtilService,private httpRequest:HttpWebRequestService) {
    super(pgRoute,appUtil,httpRequest);
  }
   override async ngOnInit(): Promise<void>
  {
    await this.getData()
  }
  async getData()
  {
    this.start();
    const res =  await this.httpRequest.get(
          `project/getAll/0/20`
        );
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
      var result = res as Project[] ;
      this.projects=result;
    }
    this.end(); 
  }
}
