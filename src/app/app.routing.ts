import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cv/cv.component";
import { HomeComponent } from "./home/home.component";
import { InfosComponent } from "./infos/infos.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MsWordComponent } from "./ms-word/ms-word.component";

const myRoutes : Routes = [
    {path:'', component : HomeComponent},
    {path:'cv', component : CvComponent},
    {path:'cv/:id', component : InfosComponent},
    {path:'servers', component : ManageServersComponent},
    {path:'msword', component : MsWordComponent}
]

export const ISIE_ROUTING = RouterModule.forRoot(myRoutes);