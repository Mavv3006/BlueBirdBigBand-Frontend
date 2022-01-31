import { Component } from '@angular/core';

@Component({
  template: `
    <iframe
      src="https://docs.google.com/spreadsheets/d/1uUHadK9iNIB-CA3gLCZNwOr2gH9s53i3DCgyV2nQYmE/edit?usp=sharing"
      id="iframe"
    >
      Ihr Browser kann leider keine eingebetteten Frames anzeigen: Sie können
      die eingebettete Seite über den folgenden Verweis aufrufen:
      https://docs.google.com/spreadsheets/d/1uUHadK9iNIB-CA3gLCZNwOr2gH9s53i3DCgyV2nQYmE/edit?usp=sharing
    </iframe>

    <p class="bottom link">
      <a
        href="https://docs.google.com/spreadsheets/d/1uUHadK9iNIB-CA3gLCZNwOr2gH9s53i3DCgyV2nQYmE/edit?usp=sharing"
      >
        Hier der Link zur Tabelle -> extra Seite
      </a>
    </p>
  `,
  styleUrls: ['./schedule.component.scss'],
})
export class DtbScheduleComponent {}
