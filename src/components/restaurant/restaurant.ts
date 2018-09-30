import { Component } from '@angular/core';

/**
 * Generated class for the RestaurantComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantComponent {

  text: string;
  restaurants=[
    {
      name:'艾初 I true 西區店',
      type:'早午餐',
      price:'20~150',
      time:'10~15分鐘',
      star:'4.5(50+)',
      img:'assets/imgs/FL1.jpg'
    },
    {
      name:'八方雲集',
      type:'午晚餐',
      price:'5~150',
      time:'10~15分鐘',
      star:'4.0(20+)',
      img:'assets/imgs/FL2.png'
    },
    {
      name:'咖哩老師',
      type:'早午餐',
      price:'20~150',
      time:'10~15分鐘',
      star:'3.3(5+)',
      img:'assets/imgs/FL3.jpg'
    },
    {
      name:'模範貝果',
      type:'早午餐',
      price:'20~150',
      time:'3~10分鐘',
      star:'4.1(30+)',
      img:'assets/imgs/FL4.jpg'
    },
  ]

  constructor() {
  }

}
