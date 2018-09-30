import { Component } from '@angular/core';

/**
 * Generated class for the OrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order',
  templateUrl: 'order.html',

})
export class OrderComponent {

  progresses=[
    { name:'八方雲集',
      foodList:'辣味鍋貼X15',
      price:'$75',
      progress1:true,
      progress2:true,
      progress3:true,
      progress4:false,
      about:'醬油要兩包'
    },
    {name:'五十嵐',
      foodList:'四季春微微X1,珍珠奶茶半少X1',
      price:'$70',
      progress1:true,
      progress2:false,
      progress3:false,
      progress4:false,
      about:'12點送到狄邦科技樓下'
    },
    {name:'艾初',
      foodList:'海克炸蝦堡X1',
      price:'$75',
      progress1:true,
      progress2:true,
      progress3:true,
      progress4:true,
      about:''
    }
  ]

  constructor() {
    console.log('Hello OrderComponent Component');

  }

}
