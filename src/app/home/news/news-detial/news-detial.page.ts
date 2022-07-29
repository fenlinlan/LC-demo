import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NEWS } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-news-detial',
  templateUrl: './news-detial.page.html',
  styleUrls: ['./news-detial.page.scss'],
})
export class NewsDetialPage implements OnInit {

  newses? : NEWS;


  constructor(
private route : ActivatedRoute,
private newsService :NewsService,
private location: Location ,
  ) { }

  ngOnInit() {
const newsID = Number(this.route.snapshot.params.id);
this.newses = this.newsService.getNews(newsID);

  }

  goBack(): void { 
    this.location.back(); 
  }
  

}
