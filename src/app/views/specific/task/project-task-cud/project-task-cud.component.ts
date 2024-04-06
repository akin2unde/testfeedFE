import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { DataExchangeService } from 'src/app/core/services/data-exchange.service';
import { ObjectState } from 'src/app/models/ObjectState';
import { ProjectTask } from 'src/app/models/project-task';
import { ProjectType } from 'src/app/models/project-type';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-project-task-cud',
  templateUrl: './project-task-cud.component.html',
  styleUrl: './project-task-cud.component.scss'
})
export class ProjectTaskCudComponent 
{
  ObjState=ObjectState
  @Input() show: boolean=false;
  @Input() obj: ProjectTask;  
  @Output() notifyParent = new EventEmitter<ProjectTask>();
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
    this.notifyParent.emit(this.obj.state== ObjectState.unchanged? {...this.obj,state:ObjectState.changed}:this.obj);   
    this.show=false; 
  }


}
