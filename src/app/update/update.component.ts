import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListePersonnesService } from '../liste-personnes.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  uPerson : Personne;
  constructor(private activatedRouter : ActivatedRoute,
    private router: Router,
    private persServ : ListePersonnesService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(
      (p) => {
        this.uPerson = this.persServ.getPersonById(p.get('id'));
      }
    )
  }

  updateThisPerson() {
    this.persServ.updatePerson(this.uPerson);
    this.router.navigate(['/cv']);
  }

}
