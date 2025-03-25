import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  standalone: false,
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent {

  formPessoa: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formPessoa = fb.group({
      nome: [''],
      cpf: [''],
      dataNascimento: [new Date],
      participaFidelidade: [''],
      saldoConta: [0],
      telefone: [''],
      cep: [''],
      rua: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']
    })
  }
}
