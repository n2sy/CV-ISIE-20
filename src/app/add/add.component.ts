import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListePersonnesService } from '../liste-personnes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private persServ : ListePersonnesService,
    private router : Router) { }

  ngOnInit(): void {
  }

  addNewPerson(p) {
    this.persServ.addPerson(p);
    this.router.navigateByUrl("/cv")
    
  }

}
