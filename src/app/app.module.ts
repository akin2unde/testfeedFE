import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppInterceptorService } from './shared/services/app-interceptor/app-interceptor.service';
// import { SharedModule } from './shared/modules/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  schemas:      [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // SharedModule,
    AppRoutingModule,
 FormsModule, ReactiveFormsModule
  ],
  providers: [
    // {
    // provide: HTTP_INTERCEPTORS,
    // useClass: AppInterceptorService,
    // multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
