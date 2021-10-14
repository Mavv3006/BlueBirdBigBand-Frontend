import { OpenMobileMenuMessageService } from './../../services/open-mobile-menu-message.service';
import { SlidingMessageService } from './../../services/sliding-message.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <main #main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @ViewChild('main')
  main: ElementRef | undefined;

  constructor(
    private messageService: SlidingMessageService,
    private openMobileMenuMessageService: OpenMobileMenuMessageService
  ) {
    this.messageService.getMessage().subscribe((pixel) => {
      this.setTranslateY(pixel);
    });
    this.openMobileMenuMessageService.getState().subscribe((isOpen) => {
      if (isOpen) {
        this.setTranslateY(0);
      } else {
        this.setTranslateY(-8 * 47);
      }
    });
  }

  private setTranslateY(pixel: number) {
    (this.main?.nativeElement as HTMLElement).style.transform =
      'translateY(' + pixel + 'px)';
  }
}
