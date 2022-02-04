import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar-element',
  templateUrl: './navbar-element.component.html',
  styleUrls: ['./navbar-element.component.scss'],
})
export class NavbarElementComponent implements AfterViewInit {
  @ViewChild('container')
  container: ElementRef | undefined;

  @ViewChild('submenu')
  submenu: ElementRef | undefined;

  @Input()
  container_title: string = '';

  @Output()
  openToggle = new EventEmitter<boolean>();

  get submenu_children_count(): number {
    if (this.submenu === undefined) {
      return 0;
    }
    return (this.submenu?.nativeElement as HTMLElement).childElementCount;
  }

  get has_children(): boolean {
    return this.submenu_children_count > 0;
  }

  isOpen = false;

  ngAfterViewInit(): void {
    console.debug(
      '[NavbarElementComponent] children count:',
      this.submenu_children_count
    );
  }

  toggleSubmenu() {
    this.isOpen = !this.isOpen;
    this.openToggle.emit(this.isOpen);
  }
}
