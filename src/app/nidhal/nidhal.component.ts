import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nidhal',
  templateUrl: './nidhal.component.html',
  styleUrls: ['./nidhal.component.css']
})
export class NidhalComponent implements OnInit {
  name : string = "Amor et nidhal";
  color : string = "pink";
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

}
