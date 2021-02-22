import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, lengthMax : any): string {
    if(value.length >=lengthMax) {
      return value.slice(0, lengthMax) + '...'
    }
    return value;
    
  }

}
