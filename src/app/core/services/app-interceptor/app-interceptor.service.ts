import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError, finalize, tap } from "rxjs/operators";
import { User } from "src/app/models/user";
import { ErrorResponse } from "src/app/models/ErrorResponse";
import Store, { AppKey } from "../../utils/store";

@Injectable()
export class AppInterceptorService implements HttpInterceptor {
  store = new Store();
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    const user = this.store.get(AppKey.USER);
    const defaultToken= 'VBAE6MDAiLCJTdGF0ZSI6DP0==';
    const req = request.clone({
      headers: request.headers
        .set("Content-Type", "application/json")
        // .set("Access-Control-Allow-Origin", "*")
        // .set("Access-Control-Allow-Headers", "X-Requested-With")
        // .set("Access-Control-Allow-Credentials", "true")
        // .set("Authorization",  (user && (user as User).Token?(user as User).Token:defaultToken))
        .set("Authorization",  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsQWRkcmVzcyI6ImFraW4ydW5kZUBob3RtYWlsLmNvbSIsImNvZGUiOiJVU1ItMzc2Njg1NjY1NiIsImlhdCI6MTcxMjM5Nzg5NywiZXhwIjoxNzEzMDAyNjk3fQ.uaz9_9sL0bD_x6shmT0-J9Wx-Kr256yEEyloPHvL5mM")

        // .set("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS")
    });

    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
              errorMsg = `Error: ${error.error.message}`;
            }
            else {
              if(error.status==0 && error.error instanceof ProgressEvent){
                errorMsg='Internet not available';
              }
              else{
                if(error.error)
                {
                  errorMsg=error.error.message? error.error.message:error.error.errors[Object.keys(error.error.errors)[0]].toString();
                }
                else{
                  errorMsg= error.status +" "+error.statusText ;
                }
              }
            }
            if(error.statusText=="Unknown Error" && error.status!==0){
              errorMsg="Server is unreachable"
            }
            return throwError(errorMsg);
        })
    )
 }
}

