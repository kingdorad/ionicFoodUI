import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  orderHistorys=[
    {shop:'八方雲集',
     price:'75',
      orderList:'辣味鍋貼X15',
      time:'2018-08-10'
    },
    {shop:'日出茶太',
      price:'120',
      orderList:'珍奶微微X1,烏龍綠半微X1,紅茶微糖X1',
      time:'2018-07-31'
    },
    {shop:'庭園',
      price:'20',
      orderList:'青茶X1',
      time:'2018-8-7'
    },
    {shop:'艾初',
      price:'90',
      orderList:'海客炸蝦堡X1',
      time:'2018-08-09'
    },

  ]
  constructor(public navCtrl: NavController) {

  }

}
