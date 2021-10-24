import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenMobileMenuMessageService {
  private subject = new Subject<boolean>();

  setState(open: boolean) {
    this.subject.next(open);
  }

  getState(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
