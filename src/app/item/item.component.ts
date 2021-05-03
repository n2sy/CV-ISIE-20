import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() onePerson;
  @Output() persToList = new EventEmitter<Personne>();
  constructor() {}

  ngOnInit(): void {}

  sendPersonne() {
    this.persToList.emit(this.onePerson);
  }
}
