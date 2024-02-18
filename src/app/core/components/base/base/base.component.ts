import { LocationStrategy, PathLocationStrategy,Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import Store, { AppKey } from 'src/app/core/utils/store';
import { Util } from 'src/app/core/utils/util';
import { User } from 'src/app/models/User';

@Component({

  styleUrls: ['./base.component.scss'],
  template: '',
  providers:[Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class BaseComponent implements OnInit {
  // NotificationType=NotificationType;
  // Util= Util;
  public loading: boolean = false;
  // appUtilService= inject(AppUtilService);
  location= inject(Location)
  isMobile = window.innerWidth <= 768;
  // appSecreteKey= 'mtnNG001DLCM#@';
  dataLoading = false;
  dummyData = Array.from({ length: 5 }).map((_, i) => (''));
  limit:number=100;
  skip:number=0;
  lastItem:string="";
  totalDataSize:number=0;
  user= new Store().get(AppKey.USER) as User;
  isModelFromUpload = false;
  constructor(
      private route: Router,
      // private appUtilService:AppUtilService
  ) { 

  }

  ngOnInit(): void {

  }
  getSvg(name:string,isImage:boolean=false){
   return Util.getSvg(name,isImage);
  }
  goToPage(page:string, extra?:any){
    if(extra)
    {
      this.route.navigate([`/${page}`, extra]);
    }
    else{
      this.route.navigateByUrl(`/${page}`);
    }
  }
  goBack(){
    this.location.back();
  }
  showLoader(): void {
    // this.appUtilService.sendBI(true);
    this.loading=true;
  }
  closeLoader(): void {
    this.loading=false
    // this.appUtilService.sendBI(false);
  }
  showNotification(notif:Notification){
    // this.appUtilService.sendShowNotification(notif);
  }

  start() { this.dataLoading = true; }
  end() { this.dataLoading = false; }

  closeUploadModel() { this.isModelFromUpload = false }
}
