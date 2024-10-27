import { Component, input, output } from '@angular/core';
import { Pony } from '../../data-access/models/pony.model';
import { PonyImagePipe } from '../../pipes/pony-image.pipe';

@Component({
  selector: 'app-pony',
  standalone: true,
  imports: [PonyImagePipe],
  template: `
    @let $pony = pony(); @if($pony) {
    <figure (click)="clicked()">
      <img [src]="$pony.color | ponyImage" [alt]="$pony.name" />
      <figcaption>{{ $pony.name }}</figcaption>
    </figure>
    }
  `,
  styles: [
    `
      figure {
        margin: 3px;
        padding: 3px;
        font-size: 12px;
      }
      img {
        height: 50px;
      }
    `,
  ],
})
export class PonyComponent {
  pony = input<Pony>();
  readonly ponyClicked = output<Pony>();

  clicked(): void {
    this.ponyClicked.emit(this.pony()!);
  }
}
