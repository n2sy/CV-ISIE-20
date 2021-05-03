import { Component, OnInit } from '@angular/core';
import { ListePersonnesService } from '../liste-personnes.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  listePersonnes;
  persSelected;

  constructor(private persServ: ListePersonnesService) {}

  ngOnInit(): void {
    //this.listePersonnes = this.persServ.getListePersonnes();
    this.persServ.getListePersonnesAPI().subscribe(
      (response) => {
        console.log(response);
        this.listePersonnes = response;
      },
      (error) => {
        console.log('Problem with getListePersonnes');

        console.log(error);
      }
    );
  }

  RecevoirPers(p) {
    this.persSelected = p;
  }

  // addNewPerson() {
  //   this.persServ.addPerson();
  // }

  showList() {
    console.log(this.listePersonnes);
  }
}
