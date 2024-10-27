import { Component, signal } from '@angular/core';
import { Race } from './data-access/models/race.model';

@Component({
  selector: 'app-races',
  standalone: true,
  imports: [],
  template: `
    @for (race of races(); track $index) {
    <div>
      <h2>{{ race.name }}</h2>
    </div>
    }
  `,
  styles: [],
})
export class RacesComponent {
  races = signal<Race[]>([{ name: 'Lyon' }, { name: 'London' }]);
}
