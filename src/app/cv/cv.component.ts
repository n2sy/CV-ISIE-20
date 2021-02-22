import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonnes : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 20, "plombier", "bart.jpg"),
    new Personne(3, "homer", "simpson", 55, "Ingénieur", "homer.jpg"),
    new Personne(4, "marge", "simpson", 55, "Ingénieur")
  ];
  persSelected : Personne;
  constructor() {
    console.log("Constructor");
    
   }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  RecevoirPers(p) {
    this.persSelected = p;
  }

}
