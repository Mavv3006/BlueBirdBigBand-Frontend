import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

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

  @Input()
  isOpen = false;

  @Output()
  isOpenChange = new EventEmitter<boolean>();

  get submenu_children_count(): number {
    if (this.submenu === undefined) {
      return 0;
    }
    return (this.submenu?.nativeElement as HTMLElement).childElementCount;
  }

  get has_children(): boolean {
    return this.submenu_children_count > 0;
  }
  toggleSubmenu() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
