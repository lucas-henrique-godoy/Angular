// Importa HttpClient para fazer requisições HTTP e HttpHeaders para adicionar cabeçalhos personalizados às requisições
import { Injectable } from '@angular/core';

import { Animal } from '../Animal'; // Importando a interface Animal

import { Observable } from 'rxjs'; // Importa a classe Observable da biblioteca RxJS, que é usada para trabalhar com fluxos de dados assíncronos


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = "http://localhost:3000/animals"

  constructor() { }

  remove(animals: Animal[], animal:Animal){
    return animals.filter((a) => animal.name !== a.name)  // Filtra e retorna ao método no component,  os animais que não têm o mesmo nome do animal a ser removido 
  }

  getAll(){

  }
}
