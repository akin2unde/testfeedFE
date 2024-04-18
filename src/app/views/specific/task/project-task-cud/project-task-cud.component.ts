import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';
import { DataExchangeService } from 'src/app/core/services/data-exchange.service';
import { HttpWebRequestService } from 'src/app/core/services/http-web-request/http-web-request.service';
import { ErrorResponse } from 'src/app/models/ErrorResponse';
import { ObjectState } from 'src/app/models/ObjectState';
import { ProjectTask } from 'src/app/models/project-task';
import { ProjectType } from 'src/app/models/project-type';
import { Status } from 'src/app/models/status';
import { Task } from 'src/app/models/task';
import { TaskStatus } from 'src/app/models/task-status';

@Component({
  selector: 'app-project-task-cud',
  templateUrl: './project-task-cud.component.html',
  styleUrl: './project-task-cud.component.scss'
})
export class ProjectTaskCudComponent extends BaseComponent
{
  statusEnum=TaskStatus

  projectTypeEnum=ProjectType
  ObjState=ObjectState
   show: boolean=false;
   obj: ProjectTask;  
  // @Output() notifyParent = new EventEmitter<ProjectTask>();
  // @Output() notifyParentToCloseDlg = new EventEmitter<boolean>(this.show);
  projectTypeEnumOptions = Object.values(ProjectType).map((m) => ({ name: m, value: m }));
  task:Task;
  constructor(private pgRoute:Router, appUtil:AppUtilService,
    private httpRequest:HttpWebRequestService, public xchangeservice:DataExchangeService) {
    super(pgRoute,appUtil,httpRequest);
    this.activareRoute.params.subscribe(params => {
      const code= params['id'];
      this.obj= {} as ProjectTask;
      if(code!='new')
      {
        this.obj= {code:code} as ProjectTask;
      }
    });
  }
  override async ngOnInit(): Promise<void>
  {
    if(this.obj.code)
    {
      await this.getData();
    }
  }
  async getData()
  {
    this.start();
    const res =  await this.httpRequest.get(
          `project-task/getByCode/${this.obj.code}`
        );
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
      this.obj= res as ProjectTask ;
    }
    this.end(); 
  }
  
  onHide()
  {
    // this.notifyParentToCloseDlg.emit(false)
  }
 
  done()
  {
    // this.notifyParent.emit(this.obj.state== ObjectState.unchanged? {...this.obj,state:ObjectState.changed}:this.obj);   
    this.show=false; 
  }


}
