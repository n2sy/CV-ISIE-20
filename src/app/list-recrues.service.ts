import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListRecruesService {
  private listRecrues : Personne[] = [];

  constructor() { }

  getListRecrues() {
    return this.listRecrues;
  }

  addRecrue(p: Personne) {
    this.listRecrues.push(p);
  }

  verifyRecrue(pers: Personne) {
    return this.listRecrues.find(p => p.id == pers.id);
  }
}
