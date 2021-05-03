import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListePersonnesService } from '../liste-personnes.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  uPerson;
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private persServ: ListePersonnesService
  ) {}

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((p) => {
      this.persServ.getPersonByIdAPI(p.get('id')).subscribe(
        (response) => {
          this.uPerson = response;
        },
        (error) => {
          console.log('Problem with getByAPI');
          console.log(error);
        }
      );
    });
  }

  updateThisPerson() {
    this.persServ.updatePersonAPI(this.uPerson).subscribe(
      (reponse) => {
        this.router.navigate(['/cv']);
      },
      (error) => {
        console.log('Problem with updatePersonAPI');
        console.log(error);
      }
    );
  }
}
