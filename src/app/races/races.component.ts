import { Component, signal } from '@angular/core';
import { Race } from './data-access/models/race.model';
import { RaceComponent } from './ui/race/race.component';

@Component({
  selector: 'app-races',
  standalone: true,
  imports: [RaceComponent],
  template: `
    @for (race of races(); track $index) {
    <div>
      <app-race [race]="race"></app-race>
    </div>
    }
  `,
})
export class RacesComponent {
  races = signal<Race[]>([
    {
      id: 12,
      name: 'Paris',
      ponies: [
        { id: 1, name: 'Gentle Pie', color: 'YELLOW' },
        { id: 2, name: 'Big Soda', color: 'ORANGE' },
        { id: 3, name: 'Gentle Bottle', color: 'PURPLE' },
        { id: 4, name: 'Superb Whiskey', color: 'GREEN' },
        { id: 5, name: 'Fast Rainbow', color: 'BLUE' },
      ],
      startInstant: '2020-02-18T08:02:00Z',
    },
    {
      id: 13,
      name: 'Tokyo',
      ponies: [
        { id: 6, name: 'Fast Rainbow', color: 'BLUE' },
        { id: 7, name: 'Gentle Castle', color: 'GREEN' },
        { id: 8, name: 'Awesome Rock', color: 'PURPLE' },
        { id: 9, name: 'Little Rainbow', color: 'YELLOW' },
        { id: 10, name: 'Great Soda', color: 'ORANGE' },
      ],
      startInstant: '2020-02-18T08:03:00Z',
    },
  ]);
}
