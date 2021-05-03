import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NidhalComponent } from './nidhal/nidhal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { DetailComponent } from './detail/detail.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { NoImagePipe } from './no-image.pipe';
import { FirstService } from './first.service';
import { RecrueComponent } from './recrue/recrue.component';
import { HomeComponent } from './home/home.component';
import { ISIE_ROUTING } from './app.routing';
import { InfosComponent } from './infos/infos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubModuleModule } from './sub-module/sub-module.module';
import { LoginComponent } from './login/login.component';
import { AddReactiveComponent } from './add-reactive/add-reactive.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    NidhalComponent,
    ParentComponent,
    DetailComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DirectComponent,
    MsWordComponent,
    CustomDirDirective,
    ManageServersComponent,
    ShortPipe,
    FilterPipe,
    NoImagePipe,
    RecrueComponent,
    HomeComponent,
    InfosComponent,
    NavbarComponent,
    UpdateComponent,
    AddComponent,
    NotFoundComponent,
    LoginComponent,
    AddReactiveComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ISIE_ROUTING,
    SubModuleModule,
    HttpClientModule,
  ],
  providers: [FirstService],
  bootstrap: [AppComponent],
})
export class AppModule {}
