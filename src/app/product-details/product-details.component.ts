import { Component, OnInit } from "@angular/core";
//maxihcoza - imports for setting up ProductDetailsComponent to display products based on the browser's URL and defined routes
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
//maxihcoza - import for setting up ProductDetailsComponent to use the cart service to add a product to the cart
import { CartService } from '../cart.service';


@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  //maxihcoza - define properties
  product;

  //maxihcoza - define the method which adds the current product to the cart, which takes the current product as an argument, uses the service's method to add the product to the cart, then displays a message that you've added a product to the cart
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  //maxihcoza - inject ActivatedRoute into the constructor by adding an argument
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService //maxihcoza - injected cart service
  ) {}

  ngOnInit() {
    //maxihcoza - first get the product ID from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    //maxihcoza - find the product that corresponds with the ID provided in the route
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
