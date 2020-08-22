import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { NewsDescriptionComponent } from './components/news-description/news-description.component';
import { NewsItemComponent } from './components/newslist/news-item/news-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PaginatorComponent } from './components/newslist/paginator/paginator.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/newslist/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewslistComponent,
    PaginatorComponent,
    NewsDescriptionComponent,
    NewsItemComponent,
    NotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
