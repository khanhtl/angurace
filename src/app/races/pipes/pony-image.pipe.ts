import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ponyImage',
  standalone: true,
})
export class PonyImagePipe implements PipeTransform {
  transform(color: string, args?: any): any {
    return `images/pony-${color?.toLowerCase()}.gif`;
  }
}
