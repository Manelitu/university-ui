import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from '../account/shared/auth.interceptor';
import { RoutingModule } from './route.module';


@NgModule({
  imports: [CommonModule, RoutingModule],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class PagesModule { }
