import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';
import { DataExchangeService } from 'src/app/core/services/data-exchange.service';
import { HttpWebRequestService } from 'src/app/core/services/http-web-request/http-web-request.service';
import { ErrorResponse } from 'src/app/models/ErrorResponse';
import { ObjectState } from 'src/app/models/ObjectState';
import { ProjectTask } from 'src/app/models/project-task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent extends BaseComponent {
  projectTasks:ProjectTask[]=[];
  projectTask:ProjectTask;
  showCUD=false
  constructor(private pgRoute:Router, appUtil:AppUtilService,
    private httpRequest:HttpWebRequestService, public xchangeservice:DataExchangeService) {
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
          `project-task/getAll/0/20`
        );
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
      var result = res as ProjectTask[] ;
      result.forEach(_=>{
        _.actors= _.taskObjs.map(m=>{return m.actor});
      });
      this.projectTasks=result;
    }
    this.end(); 
  }
  toggleCUDComponent(state:boolean)
  {
     this.showCUD=state;
  }

 async taskCUDDlgCallback(obj:ProjectTask)
  {
     this.toggleCUDComponent(false);
     this.projectTask= obj;
     await this.save();
  }

  async save(data:ProjectTask[]=[this.projectTask])
  {
    this.start();
    const res =  await this.httpRequest.post<ProjectTask[]|ErrorResponse>(
          `Project-task/save`,data
        );
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
       data.forEach(_=>{
        if(_.state== ObjectState.new)
        {
          var found = res.find(w=>w.description==_.description);
          this.projectTasks.unshift(found);
        }
        else if(_.state== ObjectState.Removed)
        {
          var foundIndex = res.findIndex(w=>w.description==_.description);
          this.projectTasks.splice(foundIndex,1);
        }
       });
    }
    this.end();  
  }

}
