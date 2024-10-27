import { Component, input } from '@angular/core';
import { Race } from '../../data-access/models/race.model';
import { PonyComponent } from '../pony/pony.component';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [PonyComponent],
  template: `<div>
    @let $race = race(); @if($race) {
    <h2>{{ $race.name }}</h2>
    <ul>
      @for (pony of $race.ponies; track $index) {
      <li>{{ pony.name }}</li>
      <div class="row">
        <div class="col-sm-2">
          <app-pony [pony]="pony"></app-pony>
        </div>
      </div>
      }
    </ul>
    }
  </div>`,
  styles: [],
})
export class RaceComponent {
  race = input<Race>();
}
