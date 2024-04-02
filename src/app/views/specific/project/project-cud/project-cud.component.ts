import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { DataExchangeService } from 'src/app/core/services/data-exchange.service';
import { ObjectState } from 'src/app/models/ObjectState';
import { Project } from 'src/app/models/project';
import { ProjectType } from 'src/app/models/project-type';
import { Status } from 'src/app/models/status';

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
  constructor() 
  {
  }
  
  onHide()
  {
    this.notifyParentToCloseDlg.emit(false)
  }
 
  done()
  {
    this.notifyParent.emit(this.project.state== ObjectState.unchanged? {...this.project,state:ObjectState.changed}:this.project);   
    this.show=false; 
  }


}
