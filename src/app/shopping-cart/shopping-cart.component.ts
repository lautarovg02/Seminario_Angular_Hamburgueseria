import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HamburgersCartService } from '../hamburgers-cart.service';
import { Burger } from '../hamburgers-list/hamburgers';
import { HamburgersListComponent } from '../hamburgers-list/hamburgers-list.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartList$: Observable<Burger[]>;
  /* 
 * Verificar antes de cada paso q no se rompa nd  */ 
  constructor(private cart :HamburgersCartService ) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  
  }
  
 
  cancelPurchase(burger : Burger): void {
    this.cart.cancelPurchase(burger)
    this.cart.updateList(burger);
  }

}
