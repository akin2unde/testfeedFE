import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';
import { DataExchangeService } from 'src/app/core/services/data-exchange.service';
import { HttpWebRequestService } from 'src/app/core/services/http-web-request/http-web-request.service';
import { ErrorResponse } from 'src/app/models/ErrorResponse';
import { ObjectState } from 'src/app/models/ObjectState';
import { OptionType } from 'src/app/core/utils/option-type';
import { Project } from 'src/app/models/project';
import { ProjectTask } from 'src/app/models/project-task';
import { ProjectType } from 'src/app/models/project-type';
import { Status } from 'src/app/models/status';
import { Task } from 'src/app/models/task';
import { TaskStatus } from 'src/app/models/task-status';
import { TaskType } from 'src/app/models/task-type';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-project-task-cud',
  templateUrl: './project-task-cud.component.html',
  styleUrl: './project-task-cud.component.scss'
})
export class ProjectTaskCudComponent extends BaseComponent
{
  statusEnum=TaskStatus
  taskStatusEnum=TaskStatus
  projectTypeEnum=ProjectType
  ObjState=ObjectState
  show: boolean=false;
  obj: ProjectTask;  
  // @Output() notifyParent = new EventEmitter<ProjectTask>();
  // @Output() notifyParentToCloseDlg = new EventEmitter<boolean>(this.show);
  projectTypeEnumOptions = Object.values(ProjectType).map((m) => ({ name: m, value: m } as OptionType));
  taskTypeEnumOptions = Object.values(TaskType).map((m) => ({ name: m, value: m } as OptionType));
  taskStatusEnumOptions = Object.values(TaskStatus).map((m) => ({ name: m, value: m } as OptionType));

  task:Task;
  projects:OptionType[]=[];
  actors:OptionType[]=[];
  constructor( pgRoute:Router,  appUtil:AppUtilService,
     httpRequest:HttpWebRequestService, public xchangeservice:DataExchangeService) {
    super(pgRoute,appUtil,httpRequest);
    this.activareRoute.params.subscribe(params => {
      const code= params['id'];
      this.obj= xchangeservice.initTaskProjectObj();
      if(code!='new')
      {
        this.obj.code= code;
      }
      else{
        this.show=true;
        this.task= xchangeservice.initTaskObj();
      }
    });
  }
  override async ngOnInit(): Promise<void>
  {
    if(this.obj.code)
    {
      await this.getData();
    }
    this.getAllProjects();
    this.getActors();
  }
  async getData()
  {
    this.start();
    const res =await this.appUtilService.get<ProjectTask>(`project-task/getByCode/${this.obj.code}`);
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
      this.obj= res ;
      this.obj.taskObjs.forEach(_=>{
        _.previousStatus=_.currentStatus;
      });
    }
    this.end(); 
  }
  async getAllProjects()
  {
    const res = await this.appUtilService.get<Project[]>(`project/getAll/0/0`);
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
       this.projects= res.map(m=>{return {name:m.name,value:m.code,other:m.projectType} as OptionType ;});
    }
  }
  async getActors()
  {
    const res = await this.appUtilService.get<User[]>(`auth/getAll/0/0`);
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
       this.actors= res.map(m=>{return {name:m.name,value:m.mailAddress,other:m.code} as OptionType ;});
    }
  }

  async save()
  {
    const res = await this.appUtilService.post<ProjectTask>(`project-task/save`,this.obj);
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
       this.obj=res ;
    }

  }
  onHide()
  {
    // this.notifyParentToCloseDlg.emit(false)
  }
 
  done()
  {
    if(this.task.state!= ObjectState.new)
    {
      this.obj.state= ObjectState.changed;
      this.task.state= ObjectState.changed;
    }
    else{
      this.obj.taskObjs.push(this.task);
    }
    this.show=false; 
  }


}
