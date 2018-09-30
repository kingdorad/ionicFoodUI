import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FoodPage} from "../food/food";

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  menus=[
  {
      name: '德國豬腳套餐',
      description: '脆皮多汁，入口即化',
      price: '$180',
      img: 'https://placem.at/things?w=250&random=food'

  },
    { type:'套餐',
      name: '德國豬腳套餐',
      description: '脆皮多汁，入口即化',
      price: '$180',
      img:'https://placem.at/things?w=250&random=food',

    },
    { type:'套餐',
      name: '套餐2',
      description: '好好吃',
      price: '$130',
      img:'https://placem.at/things?w=250&random=food',

    },
    { type:'套餐',
      name: '套餐3',
      description: '好吃好吃真好吃',
      price: '$200',
      img:'https://placem.at/things?w=250&random=food',

    },
    { type:'套餐',
      name: '套餐4',
      description: '這個也好吃',
      price: '$250',
      img:'https://placem.at/things?w=250&random=food',

    },
    { type:'套餐',
      name: '套餐5',
      description: '這個超好吃',
      price: '$120',
      img:'https://placem.at/things?w=250&random=food',

    }]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }
  foodDetail()
  {
    this.navCtrl.push(FoodPage);
  }

}
