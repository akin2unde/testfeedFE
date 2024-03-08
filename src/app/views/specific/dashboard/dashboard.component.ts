import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base/base.component';
import { AppUtilService } from 'src/app/core/services/app-util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent {
  constructor(private pgRoute:Router,private appUtil:AppUtilService) {
    super(pgRoute,appUtil);
  }

}
