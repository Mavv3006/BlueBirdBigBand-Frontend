import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { KlausGehrlein } from '../../models/klaus_gehrlein';

@Component({
  templateUrl: './legal-notes.component.html',
  styleUrls: ['./legal-notes.component.scss'],
})
export class LegalNotesComponent implements OnInit {
  bandleader = KlausGehrlein;
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Impressum');
  }
}
