import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Burger } from '../hamburgers-list/hamburgers';


@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }


  @Input()
  'quantity' :number;

  @Input()
  'max' :number;

  @Input()
  'burger' :Burger;

  @Output()
  'quantityChange' : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  'maxReached' : EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }
  
  upQuantity(): void {
    if(this.quantity < this.max){
        this.quantity++;
        this.quantityChange.emit(this.quantity);
    } else{
      this.maxReached.emit('Ah alcanzado el maximo ');
    }
  }

  changeQuantity(event : Event):void{
    if(event.target){
      alert(this.quantity);
   }
  }
 /* changeQuantity(event:any,beer:Beer):void{
    let cant=(event.target.value);
    let inputCant=event.target;
    if(cant>beer.stock){
      cant=0;
      inputCant.value=0;
      console.log('error la cantidad pretendida supera el stock');
    }
    console.log(cant);
    
  }
*/
  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }  
  }
}
