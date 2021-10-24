import { OpenMobileMenuMessageService } from './../../services/open-mobile-menu-message.service';
import { SlidingMessageService } from './../../services/sliding-message.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="main-wrapper" #wrapper>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @ViewChild('wrapper')
  wrapper: ElementRef | undefined;

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
        this.setTranslateY(5 * 49);
      }
    });
  }

  private setTranslateY(pixel: number) {
    (this.wrapper?.nativeElement as HTMLElement).style.transform =
      'translateY(' + pixel + 'px)';
  }
}
