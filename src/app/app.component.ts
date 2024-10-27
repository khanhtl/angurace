import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './core/layout/menu.component';
import { RacesComponent } from './races/races.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, RacesComponent],
  template: `
    <app-menu></app-menu>
    <main class="container" style="margin-top: 70px">
      <h1>Ponyracer</h1>
      <app-races></app-races>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angurace';
}
