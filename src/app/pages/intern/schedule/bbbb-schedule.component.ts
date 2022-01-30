import { Component } from '@angular/core';

@Component({
  template: `
    <iframe
      src="https://docs.google.com/spreadsheets/d/1_9qZ-T8wnlQgGbG_JeLVCyDRjh9w1_tdZQHO7oeTzEk/edit?usp=sharing"
      id="iframe"
    >
      Ihr Browser kann leider keine eingebetteten Frames anzeigen: Sie können
      die eingebettete Seite über den folgenden Verweis aufrufen:
      https://docs.google.com/spreadsheets/d/1_9qZ-T8wnlQgGbG_JeLVCyDRjh9w1_tdZQHO7oeTzEk/edit?usp=sharing
    </iframe>

    <p class="bottom link">
      <a
        href="https://docs.google.com/spreadsheets/d/1_9qZ-T8wnlQgGbG_JeLVCyDRjh9w1_tdZQHO7oeTzEk/edit?usp=sharing"
      >
        Hier der Link zur Tabelle -> extra Seite
      </a>
    </p>
  `,
  styles: [],
})
export class BbbbScheduleComponent {
  constructor() {}
}
