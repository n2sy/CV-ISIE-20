import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root',
})
export class ListePersonnesService {
  link = 'http://localhost:3000/cv/persons';

  private listePersonnes: Personne[] = [
    new Personne(1, 'nidhal', 'jelassi', 35, 'Enseignant', 'nidhal.jpg'),
    new Personne(2, 'bart', 'simpson', 20, 'plombier', 'bart.jpg'),
    new Personne(3, 'homer', 'simpson', 55, 'Ingénieur', 'homer.jpg'),
    new Personne(4, 'marge', 'simpson', 55, 'Ingénieur'),
  ];

  constructor(private http: HttpClient) {}

  getListePersonnes() {
    return this.listePersonnes;
  }

  getListePersonnesAPI() {
    return this.http.get(this.link);
  }

  addPerson(newP) {
    newP.id = this.listePersonnes[this.listePersonnes.length - 1].id + 1;
    this.listePersonnes.push(newP);
  }

  addPersonAPI(newP) {
    return this.http.post(this.link, newP);
  }

  getPersonById(id) {
    return this.listePersonnes.find((p) => p.id == id);
  }

  getPersonByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  updatePerson(uPers) {
    let i = this.listePersonnes.indexOf(uPers);
    this.listePersonnes[i] = uPers;
  }

  updatePersonAPI(uPers) {
    return this.http.put(`${this.link}/${uPers['_id']}`, uPers);
  }

  deletePerson(pers) {
    let i = this.listePersonnes.indexOf(pers);
    this.listePersonnes.splice(i, 1);
  }

  deletePersonAPI(pers) {
    return this.http.delete(`${this.link}/${pers['_id']}`);
  }
}
