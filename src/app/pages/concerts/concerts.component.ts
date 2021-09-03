import { Component, OnInit } from '@angular/core';
import { Concert } from 'src/app/models/concert';
import { ConcertService } from 'src/app/services/concert.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})
export class ConcertsComponent implements OnInit{

  concerts: Concert[] | undefined;

  constructor(private concertService: ConcertService) {  }

  ngOnInit(): void {
    this.concertService
      .upcoming()
      .subscribe((data: Concert[]) => {
        this.concerts = { ...data };
        console.debug( this.concerts);
      });
  }
}
