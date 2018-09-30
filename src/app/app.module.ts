import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {CustomComponent} from '../components/custom/custom'
import {RestaurantComponent} from "../components/restaurant/restaurant";
import {OrderComponent} from "../components/order/order";
import {ShopPage} from "../pages/shop/shop";
import {ProfilePage} from "../pages/profile/profile";
import {FoodPage} from "../pages/food/food";
import {CartComponent} from "../components/cart/cart";
import {CartPage} from "../pages/cart/cart";
@NgModule({
  declarations:[
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CustomComponent,
    RestaurantComponent,
    OrderComponent,
    CartComponent,
    ShopPage,
    ProfilePage,
    FoodPage,
    CartPage
  ],
  imports:[
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents:[
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    ProfilePage,
    FoodPage,
    CartPage
  ],
  providers:[
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
