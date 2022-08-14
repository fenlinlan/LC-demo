import { Component, OnInit } from '@angular/core';
import { GODDATA } from 'src/app/models/gods.model';
import { goddata } from 'src/app/services/mock-gods';


@Component({
  selector: 'app-gods',
  templateUrl: './gods.page.html',
  styleUrls: ['./gods.page.scss'],
})
export class GodsPage implements OnInit {

  constructor() { }
  godone : GODDATA[] = goddata;
  godid :GODDATA = goddata[0]; 
  ngOnInit() {
  }
  
  checkdata():void{
   var i = 0;
   if (i > goddata.length){
    i = 0
   }else{
    i = i++
   }
   this.godid = goddata[i];
  }



}
