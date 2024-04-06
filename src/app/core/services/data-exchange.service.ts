import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ObjectState } from 'src/app/models/ObjectState';
import { Project } from 'src/app/models/project';
import { ProjectTask } from 'src/app/models/project-task';
import { Status } from 'src/app/models/status';
import { TaskStatus } from 'src/app/models/task-status';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
  private project = new Subject<Project>();
  constructor() { 

  }
  public getProject(): Observable<Project> {
    return this.project.asObservable();
  }
  public sendProject(prj: Project) {
    return this.project.next(prj);
  }
  initProjectObj():Project
  {
    return { state :ObjectState.new, name:'',description:'',status: Status.active} as Project;
  }
  initTaskProjectObj():ProjectTask
  {
    return { state :ObjectState.new,taskObjs:[], status: TaskStatus.pending,description:''} as ProjectTask;
  }
}
