import { Component, OnInit } from '@angular/core';
import { NEWS } from 'src/app/models/news.model';
import { news } from 'src/app/services/mock-news'; //虛擬內容


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  
/*  template: `<div>
    <p>Today is {{today | date}}</p>
    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
    <p>The time is {{today | date:'h:mm a z'}}</p>
  </div>`*/
})
export class NewsPage implements OnInit {
title = "最新消息";
today: number = Date.now();
selectNews? : NEWS;
a = news;
// today配合 | date可以單獨拿出日期 date:'fullDate' 會加上星期、 date:'h:mm a z'加上時間

onSelect(news:NEWS):void{
  this.selectNews = news; 
}

  constructor() { }

  ngOnInit() {
  }

}
