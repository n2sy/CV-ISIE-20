import { Pipe, PipeTransform } from '@angular/core';
import { Server } from './model/server';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: Server[], filtredStatus : string): any {
    if(filtredStatus.length == 0)
      return value;
    else {
      let newListServers : Server[] = [];
      for (let serv of value) {
        if(serv["status"] == filtredStatus)
          newListServers.push(serv);
      }
      return newListServers;
    }
  }

}
