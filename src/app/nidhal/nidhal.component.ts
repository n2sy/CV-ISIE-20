import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nidhal',
  templateUrl: './nidhal.component.html',
  styleUrls: ['./nidhal.component.css']
})
export class NidhalComponent implements OnInit {
  name : string = "Amor et nidhal";
  @Input() color : string = "pink";
  @Output() msgToParent = new EventEmitter();
  // msgToParent = new EventEmitter<string>();
  hd : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert('Le bouton a été cliqué !')
  }

  hideShowDiv() {
    this.hd = !this.hd;
  }

  sendMsg() {
    this.msgToParent.emit('Message envoyé par le composant Nidhal');
  }

}
