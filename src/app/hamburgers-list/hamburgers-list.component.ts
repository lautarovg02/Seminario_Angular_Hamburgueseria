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
  burgers: Burger[] = [];

  /*
  *Inyectamos la dependencia del servicio.
  *Se crea una variable privada con una instancia del servicio. */
  constructor( private cart : HamburgersCartService,
               private burgerDataService : BurgerDataService) {
    
  }

  ngOnInit(): void {
    this.burgerDataService.getAll()
    .subscribe(burgers  => this.burgers = burgers); 
    this.cart.getList().subscribe(burger =>{
      this.burgers.forEach( element => {
        if(element.id === burger.id ){
          element.stock += burger.quantity;
          element.quantity = 0;

        }

      });

    })
    //* Una buena practica aveces es dejar el observable arriba, y empezar a suscribirse abajo
    //* Siempre que te suscribis hay que desuscribirse
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
