import { OpenMobileMenuMessageService } from './../../services/open-mobile-menu-message.service';
import { SlidingMessageService } from './../../services/sliding-message.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

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

  translated_pixels = 0;
  old_translated_pixels = 0;

  constructor(
    private messageService: SlidingMessageService,
    private openMobileMenuMessageService: OpenMobileMenuMessageService
  ) {
    this.messageService.getMessage().subscribe((pixel) => {
      this.translated_pixels += pixel;
      this.updateTranslateY();
    });
    this.openMobileMenuMessageService.getState().subscribe((isOpen) => {
      if (isOpen) this.old_translated_pixels = this.translated_pixels - 5 * 49;
      this.translated_pixels = isOpen ? 0 : 5 * 49 + this.old_translated_pixels;
      this.updateTranslateY();
    });
  }

  private updateTranslateY() {
    (this.wrapper?.nativeElement as HTMLElement).style.transform =
      'translateY(' + this.translated_pixels + 'px)';
  }
}
