import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = [];

  addToCart(product){
    this.item.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  constructor() { }

}