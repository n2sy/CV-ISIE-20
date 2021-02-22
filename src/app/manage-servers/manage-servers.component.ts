import { Component, OnInit } from '@angular/core';
import { Server } from '../model/server';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css']
})
export class ManageServersComponent implements OnInit {
  selectedStatus = '';
  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mastere ISIE")
    }, 3000)
  });
  listServers = [
    new Server('nidhal server', 'meduim', 'stable', new Date(2020, 5, 20)),
    new Server('production server', 'large', 'critical', new Date(2020, 2, 11)),
    new Server('development server', 'meduim', 'stable', new Date(2020, 3, 22)),
    new Server('testing server', 'small', 'offline', new Date(2020, 1, 30))
  ]
  constructor() { }

  ngOnInit(): void {
  }

  setClass(s : Server) {
    return {
      'list-group-item-success' : s.status == 'stable',
      'list-group-item-danger' : s.status == 'critical',
      'list-group-item-warning' : s.status == 'offline'
    }
  }

  addNewServer() {
    this.listServers.push(
      new Server('New server', 'small', 'stable', new Date(2021, 1, 30))
    )
  }

}
