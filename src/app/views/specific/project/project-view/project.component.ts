import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';
import { HttpWebRequestService } from 'src/app/core/services/http-web-request/http-web-request.service';
import { ErrorResponse } from 'src/app/models/ErrorResponse';
import { ObjectState } from 'src/app/models/ObjectState';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent extends BaseComponent {
  projects:Project[]=[];
  showCUD=false;
  project:Project;
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
  toggleCUDComponent(state:boolean)
  {
     this.showCUD=state;
  }

  projectCUDDlgCallback(prj:Project)
  {
     if(prj.state== ObjectState.Changed)
     {
      this.project= prj;
     }
     this.save();
  }

  async save(prjs:Project[]=[this.project])
  {
    this.start();
    const res =  await this.httpRequest.post<Project[]|ErrorResponse>(
          `project/save`,prjs
        );
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
       prjs.forEach(_=>{
        if(_.state== ObjectState.New)
        {
          var found = res.find(w=>w.description==_.description);
          this.projects.unshift(found);
        }
        else if(_.state== ObjectState.Removed)
        {
          var foundIndex = res.findIndex(w=>w.description==_.description);
          this.projects.splice(foundIndex,1);
        }
       });
    }
    this.end();  
  }

}
