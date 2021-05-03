import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListePersonnesService } from '../liste-personnes.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() personnesList = [];
  @Output() persToCv = new EventEmitter<Personne>();

  constructor(private persServ: ListePersonnesService) {}

  ngOnInit(): void {
    this.personnesList = this.persServ.getListePersonnes();
  }

  sendToCv(p) {
    this.persToCv.emit(p);
  }

  showList() {
    console.log(this.personnesList);
  }
}
