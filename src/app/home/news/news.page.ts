import { Component, OnInit } from '@angular/core';
import { NEWS } from 'src/app/models/news.model';
import { news } from 'src/app/services/mock-news'; //虛擬內容
import { NavController } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';

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
// today配合 | date可以單獨拿出日期 date:'fullDate' 會加上星期、 date:'h:mm a z'加上時間
selectNews? : NEWS;
a = news;
onlineNews :NEWS[] = [];




onSelect(news:NEWS):void{
  this.selectNews = news; 
}

  constructor(private navCtrl :NavController,
    private newServices : NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  showDetail(selectedNews : NEWS){
    this.navCtrl.navigateForward('home/news/news-detial/'+selectedNews.id);
  }


  getNews() :void{
    this.newServices.getonlineNews().subscribe(onlineNews => this.onlineNews = onlineNews);
  }


}
