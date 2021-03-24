import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GererServersService } from '../services/gerer-servers.service';

@Component({
  selector: 'app-detail-servers',
  templateUrl: './detail-servers.component.html',
  styleUrls: ['./detail-servers.component.css']
})
export class DetailServersComponent implements OnInit {
  myServeur ; //: {id : number, name : string, status : string} ;
  ds : boolean = true;
  constructor(private servService : GererServersService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
        this.myServeur = this.servService.getServeurById(p.get('myid'));
      }
    );

    this.activatedRoute.queryParamMap.subscribe(
      (q) => {
        this.ds = q.get('allowEdit') == '1' ? false : true;
      }
    )
  }

}
