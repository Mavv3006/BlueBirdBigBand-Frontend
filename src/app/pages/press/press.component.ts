import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { KlausGehrlein } from '../../models/klaus_gehrlein';

@Component({
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
})
export class PressComponent implements OnInit {
  bandleader = KlausGehrlein;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Pressestimmen');
  }
}
