import { Injectable } from '@angular/core';
import { NEWS } from '../models/news.model';
import { news } from './mock-news';
import { HttpClient } from '@angular/common/http';
import {  Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsA : NEWS[] = news;
  constructor(private http: HttpClient) { }

  getNews(id:number) : NEWS {
for (let i=0;i<this.newsA.length;i++){
  if (this.newsA[i].id === id){
return this.newsA[i]
  }
}return null;
  }
  
  getonlineNews() : Observable<NEWS[]>{
    const url = 'http://140.134.25.43:8088/LC/Bdnews/newstojs.php' ;
    return this.http.get<NEWS[]>(url);
  }
  
  getsingleNews(id: number) : Observable<NEWS[]>{
    const url = 'http://140.134.25.43:8088/LC/Bdnews/newstojs.php'+ id ; 
    return this.http.get<NEWS[]>(url);
  }
  


}
