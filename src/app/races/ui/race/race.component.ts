import { Component, input } from '@angular/core';
import { Race } from '../../data-access/models/race.model';

@Component({
  selector: 'app-race',
  standalone: true,
  template: `<div>
    @let $race = race(); @if($race) {
    <h2>{{ $race.name }}</h2>
    <ul>
      @for (pony of $race.ponies; track $index) {
      <li>{{ pony.name }}</li>
      }
    </ul>
    }
  </div>`,
  styles: [],
})
export class RaceComponent {
  race = input<Race>();
}
