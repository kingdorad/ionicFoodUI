import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {CartPage} from "../../pages/cart/cart";

/**
 * Generated class for the CartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cart',
  templateUrl: 'cart.html'
})
export class CartComponent {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello CartComponent Component');
    this.text = 'Hello World';
  }
  goToCart()
  {
    this.navCtrl.push(CartPage);
  }

}
