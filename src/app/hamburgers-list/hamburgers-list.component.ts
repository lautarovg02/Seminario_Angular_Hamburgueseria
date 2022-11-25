import { Component, OnInit } from '@angular/core';
import { BurgerDataService } from '../burger-data.service';
import { HamburgersCartService } from '../hamburgers-cart.service';
import { Burger } from './hamburgers';

@Component({
  selector: 'app-hamburgers-list',
  templateUrl: './hamburgers-list.component.html',
  styleUrls: ['./hamburgers-list.component.scss'],
})
export class HamburgersListComponent implements OnInit {
  burgers: Burger[] = [
    {
      name: 'Cheese Bacon',
      type: 'Doble',
      ingredients: 'bacon, cheese, cebolla morada',
      price: 1200,
      img: 'assets/img/cheese_bacon.jpg',
      stock:50,
      offer : true,
      quantity : 0,
    },
    {
      name: 'Vegetariana',
      type: 'doble',
      ingredients: 'Soja, cebolla, chesse',
      price: 1100,
      img: 'assets/img/burger_vegana.jpg',
      stock:5,
      offer : false,
      quantity : 0,
    },
    {
      name: 'Mortal',
      type: 'Triple',
      ingredients: '4 quesos, aros de cebolla, hongos, huevo',
      price: 1500,
      img: 'assets/img/Mortal.jpeg',
      stock:8,
      offer : false,
      quantity : 0,
    },
    {
      name: 'American',
      type: 'doble',
      ingredients: 'Tomate, cebolla, lechuga, salsa especial',
      price: 1400,
      img: 'assets/img/american.jpeg',
      stock:10,
      offer : false,
      quantity : 0,
    },
    {
      name: 'La de Siempre',
      type: 'doble',
      ingredients: 'queso, cebolla, huevo, bacon',
      price: 1100,
      img: 'assets/img/doble_queso.jpeg',
      stock:0,
      offer : true,
      quantity : 0,
    }
  ];

  /*
  *Inyectamos la dependencia del servicio.
  *Se crea una variable privada con una instancia del servicio. */
  constructor( private cart : HamburgersCartService,
               private burgerService : BurgerDataService) {
    
  }

  ngOnInit(): void {

  }

  addToCart(burger : Burger): void{
    this.cart.addToCart(burger);
    burger.stock -= burger.quantity;
    burger.quantity = 0;
  }


  maxReached(msj : String): void {
    alert(msj);
  }
}
