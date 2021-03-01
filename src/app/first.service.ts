import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable()
export class FirstService {

  constructor(private secondServ : SecondService) { }

  logger(msg : string) {
    console.log("Bonjour !")
    console.log(msg);

    this.secondServ.showMsg();
    
  }
}
