import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListePersonnesService {
  private listePersonnes : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 20, "plombier", "bart.jpg"),
    new Personne(3, "homer", "simpson", 55, "Ingénieur", "homer.jpg"),
    new Personne(4, "marge", "simpson", 55, "Ingénieur")
  ];

  constructor() { }

  getListePersonnes() {
    return this.listePersonnes;
  }

  addPerson() {
    this.listePersonnes.push(
      new Personne(5, "Faouzia", "gharbi", 75, "Ingénieur", "marge.jpg"),
    )
  }

  getPersonById(id) {
    return this.listePersonnes.find(p => p.id == id);
  }
}
