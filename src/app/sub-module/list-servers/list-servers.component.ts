import { Component, OnInit } from '@angular/core';
import { GererServersService } from '../services/gerer-servers.service';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css']
})
export class ListServersComponent implements OnInit {
  listServers = [];
  constructor(private servService : GererServersService) { }

  ngOnInit(): void {
    this.listServers = this.servService.tabServers;
  }

}
