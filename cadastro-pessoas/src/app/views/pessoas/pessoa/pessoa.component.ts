import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaServiceService } from '../../../services/pessoa.service';
import { Pessoa } from '../../../models/pessoa.model';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
  standalone: false, // Correção aqui
})
export class PessoaComponent implements OnInit {

  formPessoa: FormGroup;
  pessoas: Pessoa[] = [];
  isEditing: boolean = false;
  cpfParaEditar: string | null = null;

  constructor(private fb: FormBuilder, public pessoaService: PessoaServiceService) {
    this.formPessoa = fb.group({
      nome: [''],
      cpf: [''],
      dataNascimento: [new Date()],
      participaFidelidade: [''],
      saldoConta: [0],
      telefone: [''],
      cep: [''],
      rua: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']
    });
  }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  cadastrar(): void {
    const novaPessoa: Pessoa = this.formPessoa.value;

    if (this.isEditing && this.cpfParaEditar) {
      this.pessoaService.salvar({ ...novaPessoa, cpf: this.cpfParaEditar });
      this.isEditing = false;
      this.cpfParaEditar = null;
    } else {
      this.pessoaService.salvar(novaPessoa);
    }

    this.carregarPessoas();
    this.formPessoa.reset();
  }

  excluir(): void {
    const cpf = this.formPessoa.get('cpf')?.value;
    if (cpf) {
      this.pessoaService.excluir(cpf);
      this.carregarPessoas();
      this.formPessoa.reset();
    }
  }

  pesquisar(): void {
    const cpf = this.formPessoa.get('cpf')?.value;
    if (cpf) {
      const pessoaEncontrada = this.pessoaService.getByCpf(cpf);
      if (pessoaEncontrada) {
        this.formPessoa.patchValue(pessoaEncontrada);
        this.isEditing = true;
        this.cpfParaEditar = cpf;
      } else {
        alert('Pessoa não encontrada!');
      }
    }
  }

  carregarPessoas(): void {
    this.pessoas = this.pessoaService.getAll();
  }
}
