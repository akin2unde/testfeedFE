import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { ObjectState } from 'src/app/models/ObjectState';
import { Project } from 'src/app/models/project';
import { ProjectType } from 'src/app/models/project-type';

@Component({
  selector: 'app-project-cud',
  templateUrl: './project-cud.component.html',
  styleUrl: './project-cud.component.scss'
})
export class ProjectCudComponent 
{
  ObjState=ObjectState
  @Input() show: boolean=false;
  @Input() project: Project;
  @Output() notifyParent = new EventEmitter<Project>();
  @Output() notifyParentToCloseDlg = new EventEmitter<boolean>(this.show);
  projectTypeEnumOptions = Object.values(ProjectType).map((m) => ({ name: m, value: m }));

  constructor() {
    this.project=this.project==null? {} as Project:this.project;
  }
  
  done()
  {
    this.notifyParent.emit(this.project.state== ObjectState.Unchanged? {...this.project,state:ObjectState.Changed}:this.project)
  }


}
