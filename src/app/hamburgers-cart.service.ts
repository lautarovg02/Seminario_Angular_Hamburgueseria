import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Burger } from './hamburgers-list/hamburgers';

@Injectable({
  providedIn: 'root'
})

  /* 
  * Maneja la logica del carrito 
  *
  */
export class HamburgersCartService {

  private _cartList: Burger[] = [];
  cartList: BehaviorSubject<Burger[]> = new BehaviorSubject(this._cartList);//*!CAMBIAR
  
  constructor() { }

  addToCart(burger : Burger){
    /*
    *El find()método devuelve el primer elemento de la matriz proporcionada que satisface 
    *la función de prueba proporcionada. Si ningún valor satisface la función de prueba, undefinedse devuelve. */ 
    let item = this._cartList.find((v1) => v1.name == burger.name);//* Buscador
    if(!item){
      this._cartList.push({... burger}); // Clono el objeto
    }else{
      item.quantity += burger.quantity;
    }
    this.cartList.next(this._cartList); //* Notifico el nuevo valor, equivale al emmit de eventos
    console.log(this.cartList);
  }
 
}
