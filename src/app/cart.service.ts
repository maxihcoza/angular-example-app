import { Injectable } from '@angular/core';
//maxihcoza - import for enabling the app to fetch data and interact with external APIs and resources
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  //maxihcoza - defined property to store the array of the current products in the cart
  items = [];

  //maxihcoza - define methods to add items to the cart, return cart items, and clear the cart items
  addToCart(product) {
    this.items.push(product); //maxihcoza - appends a product to an array of items
  }

  getItems() {
    return this.items; //maxihcoza - collects the items users add to the cart and returns each item with its associated quantity
  }

  clearCart() {
    this.items = [];
    return this.items; //maxihcoza - returns an emtpy array of items, which empties the cart
  }

  //maxihcoza - define method to get shipping data using HTTP client
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient //maxihcoza - inject HTTP client into the cart service
  ) { }

}