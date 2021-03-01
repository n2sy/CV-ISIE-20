import { Component, Input, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() pers : Personne;
  constructor(private firstServ : FirstService ) { }

  ngOnInit(): void {
  }

  addText() {
    this.firstServ.logger("Message du Détail Component")
  }

}
