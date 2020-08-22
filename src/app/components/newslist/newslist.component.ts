import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import { News } from 'src/app/Models/News';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})

export class NewslistComponent implements OnInit {

  public newsList: News[] = [];
  public currentPage = 1;
  public pageAmount = 0;
  public isLoading: boolean = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getNews();
  }

  private getNews(keyword?: string) {
    this.isLoading = true;
    this.newsList = [];
    this.dataService.getNews(this.currentPage, keyword).subscribe((res: News[]) => {
      this.newsList = res;
      this.isLoading = false;
      this.pageAmount = this.dataService.pageAmount;
    })
  }

  changePage(isUp: boolean) {
    if (isUp) {
      this.currentPage += this.currentPage < this.pageAmount ? 1 : 0;
    } else {
      this.currentPage -= this.currentPage > 1 ? 1 : 0;
    }
    this.getNews();
  }

  public search(input: string): void {
    this.currentPage = 1;
    this.getNews(input);
  }

}
