import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  private localStorage = 'pessoas';

  constructor() { }
}
