import { Component, OnInit } from '@angular/core';
//maxihcoza - import for retrieving shipping data via HTTP from the shipping.json file
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  //maxihcoza - define property that sets property using a method from the cart service
  shippingCosts = this.cartService.getShippingPrices();

  constructor(
    private cartService: CartService //maxihcoza - injected cart service into shipping component
  ) { }

  ngOnInit() {
  }

}