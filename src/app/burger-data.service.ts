import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Burger } from './hamburgers-list/hamburgers';

const URL = "https://6380f6b78efcfcedac144320.mockapi.io/Hamburgueseria/burgers";
@Injectable({
  providedIn: 'root'
})
export class BurgerDataService {

  constructor(private http : HttpClient) { }

  /*
  * * Consume la Api de burgers y devuelve un observable a la respuesta.
   */
  public getAll() : Observable<Burger[]>{
    //* fetch('url' {method : 'GET',})
    return this.http.get<Burger[]>(URL)//* Me devuelve otro observable
    .pipe(
      tap((burgers : Burger[]) => burgers.forEach(burger => burger.quantity = 0))//*TAP : devuelve un observable que es idéntico a la fuente. No modifica  la transmisión de ninguna manera. El operador Tap es útil para registrar el valor, depurar la secuencia para obtener los valores correctos o realizar cualquier otro efecto secundario
    ); 
    /*
    * * El pipe lo que me permite hacer son operaciones que le aplicas a datos que se van a emitir
    * * para todo el que se sucriba
     */
  }

}
