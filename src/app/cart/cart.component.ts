import { Component, OnInit } from '@angular/core';
//maxihcoza - import for setting up the cart to display the added products in the cart
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //maxihcoza - define a property to store the products in the cart, which sets the items using the cart service's method
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService //maxihcoza - injected cart service
  ) { }

  ngOnInit() {
  }

}