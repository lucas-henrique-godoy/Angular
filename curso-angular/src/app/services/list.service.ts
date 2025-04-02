// Importa HttpClient para fazer requisições HTTP e HttpHeaders para adicionar cabeçalhos personalizados às requisições
import { Injectable } from '@angular/core';

import { Animal } from '../Animal'; // Importando a interface Animal

import { Observable } from 'rxjs'; // Importa a classe Observable da biblioteca RxJS, que é usada para trabalhar com fluxos de dados assíncronos
import { HttpClient } from '@angular/common/http';
import { NumberFormatStyle } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = "http://localhost:3000/animals"

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);  // Filtra e retorna ao método no component,  os animais que não têm o mesmo nome do animal a ser removido 
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}
