import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  message = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.message = 'Die URl "' + this.router.url + '" gibt es nicht.';
  }
}
