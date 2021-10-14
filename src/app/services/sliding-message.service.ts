import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SlidingMessageService {
  private subject = new Subject<number>();

  sendMessage(pixel: number) {
    this.subject.next(pixel);
  }

  getMessage(): Observable<number> {
    return this.subject.asObservable();
  }
}
