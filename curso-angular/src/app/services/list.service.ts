import { Injectable } from '@angular/core';

import { Animal } from '../Animal'; // Importando a interface Animal

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal:Animal){
    return animals.filter((a) => animal.name !== a.name)  // Filtra e retorna ao método no component,  os animais que não têm o mesmo nome do animal a ser removido 
  }
}
