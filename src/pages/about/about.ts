import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  catagorys=[
    {img:'assets/imgs/c1.png',
      catagory:'越式料理'
    },
    {img:'assets/imgs/c2.png',
      catagory:'日本料理'
    },
    {img:'assets/imgs/c3.png',
      catagory:'麵食'
    },
    {img:'assets/imgs/c4.png',
      catagory:'咖啡點心'
    },
    {img:'assets/imgs/c5.png',
      catagory:'韓式料理'
    },
    {img:'assets/imgs/c6.png',
      catagory:'漢堡速食'
    },
    {img:'assets/imgs/c7.png',
      catagory:'港式料理'
    },
    {img:'assets/imgs/c8.png',
      catagory:'披薩'
    },
    {img:'assets/imgs/c9.png',
      catagory:'純素食'
    },
    {img:'assets/imgs/c10.png',
      catagory:'蔬果果汁'
    },
  ]
  constructor(public navCtrl: NavController) {

  }
  todoText='123';
  addTodo($event: KeyboardEvent) {
    console.log('輸入的文字為 : ' + this.todoText);
  }

}
