import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Notification } from 'src/app/models/notification';

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {
  
  private _notif = new Subject<Notification>();
  notif$ = this._notif.asObservable();
  constructor() 
  {
    
  }
  notify(inf:Notification)
  {
    this._notif.next(inf);
  }
}
