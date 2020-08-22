import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { News } from '../Models/News';

@Injectable({
  providedIn: 'root'
})

export class DataService {

private readonly pageSize: number = 9;
private readonly API_KEY = '53f0a9c1710544128de0c64ec25af613';
private readonly COUNTRY = 'us';
public pageAmount: number;
private newsList: News[] = [];

constructor(private http: HttpClient) { }

public getNews(page: number, keywords?: string): Observable<News[]> {
  this.newsList = [];

  let httpQuery = 'https://newsapi.org/v2/top-headlines?' +
  'country=' + this.COUNTRY + '&' +
  'pageSize=' + this.pageSize + '&' +
  'page=' + page + '&' +
  'apiKey=' + this.API_KEY;

  if (keywords) {
    httpQuery += '&q=' + keywords;
  }

  return this.http.get(httpQuery).pipe(map(data => {
    let rawNewsList = data['articles'];
    this.pageAmount = Math.ceil(data['totalResults'] / this.pageSize);
    let id = 0;
    this.newsList = rawNewsList.map(function(news) {
      let currentNews = new News(id++, news.title, news.description, news.urlToImage, news.publishedAt, news.content);
      return currentNews;
    });
    return this.newsList;
  }));
}

public getNewsById(id: number) {
  return this.newsList.find((item) => {
    return item.id == id;
  })
}

}
