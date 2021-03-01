import { Component, OnInit } from '@angular/core';
import { ListePersonnesService } from '../liste-personnes.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonnes : Personne[] = [];
  persSelected : Personne;
  
  constructor(private persServ : ListePersonnesService) {
    
   }

  ngOnInit(): void {
    this.listePersonnes = this.persServ.getListePersonnes();
  }

  RecevoirPers(p) {
    this.persSelected = p;
  }

  addNewPerson() {
    this.persServ.addPerson();
  }

  showList() {
    console.log(this.listePersonnes);
    
  }

}
