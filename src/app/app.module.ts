import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { EmbaucheListComponent } from './embauche-list/embauche-list.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CvDetailsComponent } from './cv-details/cv-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    EmbaucheListComponent,
    HeaderComponent,
    CvDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
