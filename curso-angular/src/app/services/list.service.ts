// Importa HttpClient para fazer requisições HTTP e HttpHeaders para adicionar cabeçalhos personalizados às requisições
import { Injectable } from '@angular/core';

import { Animal } from '../Animal'; // Importando a interface Animal

import { Observable } from 'rxjs'; // Importa a classe Observable da biblioteca RxJS, que é usada para trabalhar com fluxos de dados assíncronos
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = "http://localhost:3000/animals"

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal:Animal){
    return animals.filter((a) => animal.name !== a.name)  // Filtra e retorna ao método no component,  os animais que não têm o mesmo nome do animal a ser removido 
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
}
