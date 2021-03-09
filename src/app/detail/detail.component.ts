import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from '../first.service';
import { ListRecruesService } from '../list-recrues.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() pers : Personne;
  constructor(private recrueServ : ListRecruesService,
    private router : Router) { }

  ngOnInit(): void {
  }

  addRecrue() {
    if(this.recrueServ.verifyRecrue(this.pers))
      alert('Cette personne a déjà été recrutée !')
    else
      this.recrueServ.addRecrue(this.pers);
    //console.log(this.recrueServ.getListRecrues());
    
  }

  goToInfos() {
    this.router.navigate(['cv', this.pers.id])
  }

}
