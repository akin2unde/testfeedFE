import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';
import { HttpWebRequestService } from 'src/app/core/services/http-web-request/http-web-request.service';
import { ErrorResponse } from 'src/app/models/ErrorResponse';
import { KeyValue } from '../../../models/key-value';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent {
  taskSummaryData: KeyValue[]=[];
  constructor(private pgRoute:Router,private appUtil:AppUtilService, private httpRequest:HttpWebRequestService
    ) {
    super(pgRoute,appUtil,httpRequest);
  }
  override async ngOnInit(): Promise<void>
  {
    await  this.getUserSummary();
  }

  async getUserSummary()
  {
    this.start();
    const u="akin2unde@hotmail.com";
    const res =  await this.httpRequest.get(
          `project-task/getUserTaskSummary/${u}`
        );
    if (res instanceof ErrorResponse) {
      this.showError( res.message,
      );
    } else {
      var result = res as KeyValue[] ;
      this.taskSummaryData=result;
    }
    this.end(); 
  }
  
}
