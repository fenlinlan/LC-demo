import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-draws',
  templateUrl: './draws.page.html',
  styleUrls: ['./draws.page.scss'],
})
export class DrawsPage implements OnInit {
constructor(private location: Location ,) { }

dtype? : String;
ans : Number = 0;
drawans? :String;




  drawsmz():Number{
    let i = Math.random();
    i = i*64;
    i = Math.floor(i)+1;
    return i;
  }

  drawsgl():Number{
    let i = Math.random();
    i = i*64;
    i = Math.floor(i)+1;
    return i;
  }

  draws():void{
    if ( this.dtype == "mz"){
      this.ans = this.drawsmz();
    }else if (this.dtype == "gl"){
      this.ans = this.drawsgl();
    }else{
      this.ans = 99999999;
    }
  }

  draw2():void{
 let numm = Math.random();
 numm = numm * 81 % 3;
 numm = Math.floor(numm)+1;
 if(numm == 1){
  this.drawans = "聖筊，請點選按鈕查看籤詩結果。"
 }else if (numm ==  2){
  this.drawans = "笑筊，請重新抽籤或詢問問題"
 }else if (numm ==  3){
  this.drawans = "蓋筊，請重新抽籤或詢問問題"
 }else{
    this.drawans = "出四啦!趕快通知廟方進行維修!"
  }
 }
 ngOnInit() {
}

goBack(): void { 
  this.location.back(); 
}

  }








