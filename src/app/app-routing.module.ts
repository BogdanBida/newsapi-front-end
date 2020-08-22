import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewslistComponent } from './components/newslist/newslist.component';
import { NewsDescriptionComponent } from './components/news-description/news-description.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: NewslistComponent },
  { path: 'news-description/:id', component: NewsDescriptionComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
