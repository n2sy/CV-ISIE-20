import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NidhalComponent } from './nidhal/nidhal.component';
import { FormsModule } from '@angular/forms';
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
    HomeComponent
    ],
  imports: [
  BrowserModule,
    FormsModule,
    ISIE_ROUTING
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
