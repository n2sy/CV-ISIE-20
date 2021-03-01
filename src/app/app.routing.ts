import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cv/cv.component";
import { HomeComponent } from "./home/home.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";

const myRoutes : Routes = [
    {path:'', component : HomeComponent},
    {path:'cv', component : CvComponent},
    {path:'servers', component : ManageServersComponent}
]

export const ISIE_ROUTING = RouterModule.forRoot(myRoutes);