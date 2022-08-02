import { Component, OnInit } from '@angular/core';
import { storylist } from 'src/app/models/story.model';
import { SLIST } from 'src/app/services/mock-story';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {

  constructor(private navCtrl :NavController,) { }
  storylist : storylist[] = SLIST;
  slecttype? :storylist;
  ngOnInit() {
  }

cc() :void{
  alert (this.slecttype);
}


selectitem(SLIST:storylist){
this.slecttype = SLIST
}

showDetail(slecttype : storylist):void{
  this.navCtrl.navigateForward('home/story/'+ slecttype.type);
}

}
