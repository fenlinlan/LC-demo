import { Injectable } from '@angular/core';
import { NEWS } from '../models/news.model';
import { news } from './mock-news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsA : NEWS[] = news;
  constructor() { }

  getNews(id:number) : NEWS {
for (let i=0;i<this.newsA.length;i++){
  if (this.newsA[i].id === id){
return this.newsA[i]
  }
}return null;
  }
  



}
