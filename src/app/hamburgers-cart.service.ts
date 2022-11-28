import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Burger } from './hamburgers-list/hamburgers';

@Injectable({
  providedIn: 'root',
})

/*
 * Maneja la logica del carrito
 *
 */
export class HamburgersCartService {
  private _cartList: Burger[] = [];
  public listSubject = new Subject<Burger>();

  cartList: BehaviorSubject<Burger[]> = new BehaviorSubject(this._cartList);

  constructor() {}

  addToCart(burger: Burger) {
    /*
     *El find()método devuelve el primer elemento de la matriz proporcionada que satisface
     *la función de prueba proporcionada. Si ningún valor satisface la función de prueba, undefinedse devuelve. */
    let item = this._cartList.find((v1) => v1.name == burger.name); //* Buscador
    if (!item) {
      this._cartList.push({ ...burger })
      burger.stock = burger.stock - burger.quantity ;
      burger.quantity = 0; // Clono el objeto
    } else {
      item.quantity += burger.quantity;
      burger.stock = burger.stock - burger.quantity ;
      burger.quantity = 0;
    }
    this.cartList.next(this._cartList); //* Notifico el nuevo valor, equivale al emmit de eventos
    console.log(this.cartList);
  }

  updateList(burger: Burger){
    this.listSubject.next(burger);
  }

  getList(){
    return this.listSubject.asObservable();
  }

 cancelPurchase(burger: Burger) {
  this._cartList = this._cartList.filter((b) => b.name !== burger.name);
  this.cartList.next(this._cartList);
 }
}
