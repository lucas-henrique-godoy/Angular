import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {
  private storageKey = 'pessoas'; // Chave para armazenar os dados no localStorage

  constructor() { }

  // Salvar pessoa (adicionar ou atualizar)
  salvar(pessoa: Pessoa) {
    let pessoas = this.getAll();
    const index = pessoas.findIndex(p => p.cpf === pessoa.cpf);

    if (index !== -1) {
      pessoas[index] = pessoa; // Atualiza os dados se já existir
    } else {
      pessoas.push(pessoa); // Adiciona um novo registro
    }

    localStorage.setItem(this.storageKey, JSON.stringify(pessoas));
  }

  // Retorna todas as pessoas salvas
  getAll(): Pessoa[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Buscar uma pessoa pelo CPF
  getByCpf(cpf: string): Pessoa | undefined {
    return this.getAll().find(pessoa => pessoa.cpf === cpf);
  }

  // Excluir uma pessoa pelo CPF
  excluir(cpf: string) {
    let pessoas = this.getAll().filter(pessoa => pessoa.cpf !== cpf);
    localStorage.setItem(this.storageKey, JSON.stringify(pessoas));
  }
}
