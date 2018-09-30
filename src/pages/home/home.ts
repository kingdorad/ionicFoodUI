import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides = [
    {
      image: "assets/imgs/banner4.jpg",
    },
    {
      image: "assets/imgs/banner5.png",
    },
    {
      image: "assets/imgs/banner6.png",
    },
  ];
  constructor(public navCtrl: NavController) {


  }

}
