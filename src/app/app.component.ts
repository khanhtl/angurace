import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './layout/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  template: `
    <app-menu></app-menu>
    <main class="container" style="margin-top: 70px">
      <h1>Ponyracer</h1>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angurace';
}
