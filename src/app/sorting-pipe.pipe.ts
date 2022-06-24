import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingPipe'
})
export class SortingPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
