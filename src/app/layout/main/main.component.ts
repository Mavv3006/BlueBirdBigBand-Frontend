import { Component } from '@angular/core';

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
export class MainComponent {}
