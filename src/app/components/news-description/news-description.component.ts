import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import { News } from 'src/app/Models/News';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-description',
  templateUrl: './news-description.component.html',
  styleUrls: ['./news-description.component.scss']
})
export class NewsDescriptionComponent implements OnInit {

  public id: number;
  public news: News;
  private subscription: Subscription;
  constructor(private dataService: DataService, private activateRoute: ActivatedRoute ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.id = params['id'];
    })
   }

  ngOnInit() {
    this.news = this.dataService.getNewsById(this.id);
  }

}
