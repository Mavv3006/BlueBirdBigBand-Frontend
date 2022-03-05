import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'secure',
})
export class SecurePipe implements PipeTransform {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  transform(url: string): Observable<SafeUrl> {
    return this.http
      .get(url, { responseType: 'blob' })
      .pipe(
        map((value: Blob) =>
          this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(value))
        )
      );
  }
}
