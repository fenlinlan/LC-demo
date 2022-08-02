import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-money',
  templateUrl: './money.page.html',
  styleUrls: ['./money.page.scss'],
})
export class MoneyPage implements OnInit {

  constructor(private navCtrl :NavController) { }

  ngOnInit() {
  }


  showDetail(){
    this.navCtrl.navigateForward('home/money/draws');
  }
  
}
