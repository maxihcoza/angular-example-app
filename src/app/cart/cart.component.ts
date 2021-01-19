import { Component, OnInit } from '@angular/core';
//maxihcoza - import for providing convenient methods for generating controls
import { FormBuilder } from '@angular/forms';
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
  //maxihcoza - define a propery, gather the user's name and address, then use a method to set the property to a form model containing the name and address fields
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService, //maxihcoza - injected cart service
    private formBuilder: FormBuilder, //maxihcoza - injected form builder service
  ) { }

  //maxihcoza - define a method to process the form, allowing users to submit their name and address and then resets the form
  onSubmit(): void {
    //maxihcoza - process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}