import { Component, OnInit } from '@angular/core';
import { ListRecruesService } from '../list-recrues.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-recrue',
  templateUrl: './recrue.component.html',
  styleUrls: ['./recrue.component.css']
})
export class RecrueComponent implements OnInit {
  AllRecrues : Personne[] = [];
  constructor(private recrueServ : ListRecruesService) { }

  ngOnInit(): void {
    this.AllRecrues = this.recrueServ.getListRecrues();
  }

}
