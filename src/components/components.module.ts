import { NgModule } from '@angular/core';
import { CustomComponent } from './custom/custom';
import { RestaurantComponent } from './restaurant/restaurant';
import { OrderComponent } from './order/order';
import { CartComponent } from './cart/cart';
@NgModule({
	declarations: [CustomComponent,
    RestaurantComponent,
    OrderComponent,
    CartComponent],
	imports: [],
	exports: [CustomComponent,
    RestaurantComponent,
    OrderComponent,
    CartComponent]
})
export class ComponentsModule {}
