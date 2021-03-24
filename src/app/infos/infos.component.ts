import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListePersonnesService } from '../liste-personnes.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private persServ : ListePersonnesService) { }

  ngOnInit(): void {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.pers = this.persServ.getPersonById(id);
    

    this.activatedRoute.paramMap.subscribe(
      (p : ParamMap) => {
        this.pers = this.persServ.getPersonById(p.get('id'))
      },
      (error) => {
        console.log(error);     
      },
    )

  }

}
