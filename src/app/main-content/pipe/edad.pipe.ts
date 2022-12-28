import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad'
})
export class EdadPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value + ' años';
  }
}
