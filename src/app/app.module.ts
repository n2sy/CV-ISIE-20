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
    MsWordComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }