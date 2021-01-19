import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  //maxihcoza - defined property to store the array of the current products in the cart
  items = [];

  //maxihcoza - define methods to add items to the cart, return cart items, and clear the cart items
  addToCart(product) {
    this.items.push(product); //maxihcoza - appends a product to an array of items
  }

  getItems() {
    return this.items; //collects the items users add to the cart and returns each item with its associated quantity
  }

  clearCart() {
    this.items = [];
    return this.items; //reurns an emtpy array of items, which empties the cart
  }

  constructor() { }

}