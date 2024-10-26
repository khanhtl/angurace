import { Component } from '@angular/core';
@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">PonyRacer</a>
        <button type="button" class="navbar-toggler" (click)="toggleNavbar()">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbar"
          class="navbar-collapse"
          [class.collapse]="navbarCollapsed"
        >
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link">Races</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [``],

})
export class MenuComponent {
  navbarCollapsed = true;
  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
