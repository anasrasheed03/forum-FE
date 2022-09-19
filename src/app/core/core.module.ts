import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import {
  ApiService,
  PostService,
  AuthGuard,
  CommentsService,
  JwtService,
  AuthService,
  LikesService,
  AutoFetchService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    PostService,
    AuthGuard,
    CommentsService,
    JwtService,
    AuthService,
    LikesService,
    AutoFetchService
  ],
  declarations: []
})
export class CoreModule { }
