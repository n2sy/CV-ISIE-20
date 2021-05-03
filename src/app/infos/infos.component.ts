import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListePersonnesService } from '../liste-personnes.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  pers;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private persServ: ListePersonnesService
  ) {}

  ngOnInit(): void {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.pers = this.persServ.getPersonById(id);

    this.activatedRoute.paramMap.subscribe(
      (p: ParamMap) => {
        this.persServ.getPersonByIdAPI(p.get('id')).subscribe(
          (response) => {
            this.pers = response;
          },
          (error) => {
            console.log('Problem with getPersonById');
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToUpdate() {
    this.router.navigate(['cv', 'edit', this.pers._id]);
  }

  deleteThisPerson() {
    if (confirm('Etes-vous sûr de vouloir supprimer cette personne ?')) {
      this.persServ.deletePersonAPI(this.pers).subscribe(
        (response) => {
          console.log(response);
          this.router.navigateByUrl('/cv');
        },
        (error) => {
          console.log('Problem with delete');
          console.log(error);
        }
      );
    }
  }
}
