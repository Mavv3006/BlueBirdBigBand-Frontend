import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar-element',
  templateUrl: './navbar-element.component.html',
  styleUrls: ['./navbar-element.component.scss'],
})
export class NavbarElementComponent {
  @ViewChild('container')
  container: ElementRef | undefined;

  @ViewChild('submenu')
  submenu: ElementRef | undefined;

  @Input()
  container_title: string = '';

  get submenu_children_count(): number {
    return (this.submenu?.nativeElement as HTMLElement).childElementCount;
  }

  isOpen = false;

  toggleSubmenu() {}
}
