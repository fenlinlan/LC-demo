import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url="http://localhost:8100/home";
  imgname :string = "mz_q";


  constructor() {}


changeimage():void {
if (this.imgname == "mz_q"){
  this.imgname = "fdzs_q";
}else if (this.imgname == "fdzs_q"){
this.imgname = "mz_q";
}




}
  



}
