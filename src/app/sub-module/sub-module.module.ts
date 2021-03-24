import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListServersComponent } from './list-servers/list-servers.component';
import { DetailServersComponent } from './detail-servers/detail-servers.component';
import { EditServersComponent } from './edit-servers/edit-servers.component';
import { SUB_ROUTING } from './sub-module.routing';



@NgModule({
  declarations: [ListServersComponent, DetailServersComponent, EditServersComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SUB_ROUTING
  ]
})
export class SubModuleModule { }
