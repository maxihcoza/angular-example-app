import { Component, OnInit } from "@angular/core";
//maxihcoza - imports for setting up ProductDetailsComponent to display products based on the browser's URL and defined routes
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  //maxihcoza - define properties
  product;

  //maxihcoza - inject ActivatedRoute into the constructor by adding an argument
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    //maxihcoza - first get the product ID from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    //maxihcoza - find the product that corresponds with the ID provided in the route
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
