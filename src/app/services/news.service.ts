import { Injectable } from '@angular/core';
import { NEWS } from '../models/news.model';
import { news } from './mock-news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsA : NEWS[] = news;
  constructor() { }

  getNews():void {

  }
  



}
