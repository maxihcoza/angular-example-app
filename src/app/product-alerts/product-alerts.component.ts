import { Component, OnInit } from '@angular/core';
//maxihcoza - import for setting up ProductAlertsComponent to receive product data
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  //maxihcoza - define property
  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}