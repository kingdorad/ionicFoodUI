import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {ShopPage} from "../../pages/shop/shop";

/**
 * Generated class for the CustomComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom',
  templateUrl: 'custom.html'
})
export class CustomComponent {

  text: string;
  hotFoods=[
    {
      title:'德式料理 勤美店',
      star:'3.4',
      img:'assets/imgs/f1.png',
      wait:'15-25分鐘',
      type:'80~600'
    },
    {
      title:'泰式料理 文心店',
      star:'4.4',
      img:'assets/imgs/f2.png',
      wait:'10-15分鐘',
      type:'40~650'
    },
    {
      title:'台式料理 公益店',
      star:'2.4',
      img:'assets/imgs/f3.png',
      wait:'15-30分鐘',
      type:'30~500'
    },
    {
      title:'歐式料理 草悟店',
      star:'5.0',
      img:'assets/imgs/f4.png',
      wait:'15-25分鐘',
      type:'150~1050'
    }

  ]
  constructor(public  navCtrl:NavController) {
    console.log('Hello CustomComponent Component');
    this.text = 'Hello World';
  }
    goToShop()
    {
      this.navCtrl.push(ShopPage);
    }
}
