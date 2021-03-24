import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GererServersService {
  tabServers = [
    {
      id : 1,
      name : 'Serveur de production',
      status : 'online'
    },
    {
      id : 2,
      name : 'Serveur de test',
      status : 'offline'
    },
    {
      id : 3,
      name : 'Serveur de deploiement',
      status : 'online'
    }
  ]
  constructor() { }

  getServeurById(id) {
    return this.tabServers.find(s => s.id == id);
  }
}
