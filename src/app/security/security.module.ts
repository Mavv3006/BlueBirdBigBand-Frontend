import { AuthInterceptor } from './interceptor/auth.interceptor';
import { SecurePipe } from './secure.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const components = [SecurePipe];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class SecurityModule {}
