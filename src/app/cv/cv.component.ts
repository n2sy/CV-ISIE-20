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
    new Personne(1, "bart", "simpson", 20, "plombier", "bart.jpg"),
    new Personne(1, "homer", "simpson", 55, "Ingénieur", "homer.jpg")
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
