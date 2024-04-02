import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ObjectState } from 'src/app/models/ObjectState';
import { Project } from 'src/app/models/project';
import { Status } from 'src/app/models/status';

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
}
