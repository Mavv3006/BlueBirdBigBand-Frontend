import { Component } from '@angular/core';
import { Musician } from '../../models/musician';

@Component({
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.scss'],
})
export class MusiciansComponent {
  readonly tux_sax = 'default/tux-sax.jpg';
  readonly tux_dirigent = 'default/tux-dirigent.png';
  readonly tux_drummer = 'default/tux-drummer.png';
  readonly tux_gitarrist = 'default/tux-gitarrist.png';
  readonly tux = 'default/tux.png';
  readonly tux_trompeter = 'default/tux-trompeter.png';

  bandleader: Musician = {
    name: 'Klaus Gehrlein',
    picture: 'gehrlein-klaus.jpg',
  };

  vocals: Musician[] = [
    { name: 'Gabi Kipper', picture: 'kipper-gabi.jpeg' },
    { name: '?', picture: this.tux },
  ];

  saxophones: Musician[] = [
    { name: 'Jutta Acker', picture: 'acker-jutta.jpeg' },
    { name: 'Niklas Piening', picture: this.tux_sax },
    { name: 'Karin Kolb', picture: this.tux_sax },
    { name: 'Jürgen Höppchen', picture: this.tux_sax },
    { name: 'Heiko Lübben', picture: 'luebben-heiko.jpeg' },
    { name: 'Sabine Kolb', picture: this.tux_sax },
  ];

  trombones: Musician[] = [
    { name: 'Michael Blessing', picture: this.tux },
    { name: 'Ecki Lubisch', picture: 'lubisch-ecki.jpeg' },
  ];

  trumpets: Musician[] = [
    { name: 'Ursula Tremel', picture: 'tremel-ursel.jpeg' },
    { name: 'Jürgen Scheidt', picture: 'scheid-juergen.jpeg' },
    { name: 'Steffen Kolb', picture: this.tux_trompeter },
    { name: 'Marvin Deuschle', picture: 'deuschle-marvin.jpeg' },
    { name: 'Benedikt Sommer', picture: this.tux_trompeter },
  ];

  rhythms: Musician[] = [
    { name: 'Rudi Kolbinger (g)', picture: 'kolbinger-rudi.jpeg' },
    { name: 'Host Keller (p)', picture: 'keller-horst.jpeg' },
    { name: 'Rudolf Schultz (bass)', picture: this.tux_gitarrist },
    { name: 'Leonard Breuning (dr)', picture: this.tux_drummer },
  ];
}
