import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { CvComponent } from "./cv/cv.component";
import { HomeComponent } from "./home/home.component";
import { InfosComponent } from "./infos/infos.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MsWordComponent } from "./ms-word/ms-word.component";
import { UpdateComponent } from "./update/update.component";
import { NotFoundComponent } from './not-found/not-found.component';

const myRoutes : Routes = [
    {path:'', component : HomeComponent},
    // {path:'cv', component : CvComponent},
    // {path:'cv/add', component : AddComponent},
    // {path:'cv/:id', component : InfosComponent}, 
    // {path:'cv/edit/:id', component : UpdateComponent},
    {path:'cv', children: [
        {path:'', component : CvComponent},
        {path:'add', component : AddComponent},
        {path:':id', component : InfosComponent}, 
        {path:'edit/:id', component : UpdateComponent},
    ]},
    {path:'servers', component : ManageServersComponent},
    {path:'msword', component : MsWordComponent},
    {path:'serveur', loadChildren : '../app/sub-module/sub-module.module#SubModuleModule'},
    {path:'not-found', component : NotFoundComponent},
    {path:'**', redirectTo : 'not-found'}
    
]

export const ISIE_ROUTING = RouterModule.forRoot(myRoutes);