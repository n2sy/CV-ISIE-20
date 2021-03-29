import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
    private router : Router,
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

  goToUpdate() {
    this.router.navigate(['cv', 'edit', this.pers.id]);
  }

  deleteThisPerson() {
    if(confirm("Etes-vous sûr de vouloir supprimer cette personne ?")) {
      this.persServ.deletePerson(this.pers);
      this.router.navigateByUrl("/cv");
    }
    

  }

}
