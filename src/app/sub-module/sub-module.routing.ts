import { RouterModule, Routes } from '@angular/router';
import { ListServersComponent } from './list-servers/list-servers.component'
import { DetailServersComponent } from './detail-servers/detail-servers.component';
import { EditServersComponent } from './edit-servers/edit-servers.component';


const subRoutes : Routes = [
   {path: 'serveur', component: ListServersComponent, children: [
            {path : ':myid', component: DetailServersComponent},
            {path : 'edit/:myid', component: EditServersComponent}
        ]}
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes); 