import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {
  listFonts = ["", "Garamond", "Impact", "Noteworthy"];
  bgColor : string;
  color : string;
  size : string;
  font : string;

  constructor() { }

  ngOnInit(): void {
  }

  changeSize(newSize) {
    console.log(newSize.value);
    
    this.size = newSize.value + 'px';
  }

}
