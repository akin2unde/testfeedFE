import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Notification } from 'src/app/models/notification';

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {
  private _sideMenu = new Subject<string>();
  private _notif = new Subject<Notification>();
  notif$ = this._notif.asObservable();
  sideMenu$ = this._sideMenu.asObservable();

  constructor() 
  {
    
  }
  notify(inf:Notification)
  {
    this._notif.next(inf);
  }
  notifySideMenu(data:string)
  {
    this._sideMenu.next(data);
  }
}
