// Importação dos módulos necessários do Angular
import { FormsModule } from '@angular/forms'; // Módulo para manipulação de formulários
import { Component, OnInit } from '@angular/core'; // Importação do decorator Component e da interface OnInit

// Definição do componente principal da aplicação
@Component({
  selector: 'app-root', // Nome da tag usada para inserir este componente no HTML
  templateUrl: './app.component.html', // Caminho do arquivo de template HTML associado
  standalone: false, // Indica que este componente não é independente (precisa de um módulo)
  styleUrl: './app.component.css' // Caminho do arquivo de estilo CSS associado
})
export class AppComponent implements OnInit { // Definição da classe do componente que implementa OnInit

  // Propriedade para armazenar o título do aplicativo
  title = 'cadastro';

  // Lista que armazenará os cadastros
  lista: any[] = [];

  // Objeto que representa uma pessoa cadastrada, inicializado vazio
  pessoa = {
    nome: '',
    cpf: '',
    dataNascimento: '',
    fidelidade: false,
    saldo: 0,
    telefone: '',
    endereco: {
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: ''
    }
  };

  // Variáveis de controle para edição
  editando = false; // Indica se um item está sendo editado
  indexEdicao = -1; // Armazena o índice do item em edição na lista

  // Método executado automaticamente quando o componente é inicializado
  ngOnInit() {
    // Recupera os cadastros armazenados no localStorage (ou inicializa como uma lista vazia se não houver nenhum)
    this.lista = JSON.parse(localStorage.getItem('cadastros') || '[]');
  }

  // Método para salvar um novo cadastro ou atualizar um existente
  salvar() {
    if (this.editando) {
      // Se estiver editando, substitui os dados no índice correspondente
      this.lista[this.indexEdicao] = { ...this.pessoa };
      this.editando = false; // Finaliza o modo de edição
    } else {
      // Se for um novo cadastro, adiciona à lista
      this.lista.push({ ...this.pessoa });
    }

    // Atualiza os dados no localStorage
    this.atualizarLocalStorage();

    // Reseta o formulário para os valores padrão
    this.resetarFormulario();
  }

  // Método para carregar os dados de um cadastro existente para edição
  editar(index: number) {
    this.pessoa = { ...this.lista[index] }; // Clona os dados para evitar alterações diretas
    this.editando = true; // Ativa o modo de edição
    this.indexEdicao = index; // Define o índice do item que está sendo editado
  }

  // Método para excluir um cadastro da lista
  excluir(index: number) {
    this.lista.splice(index, 1); // Remove o item da lista
    this.atualizarLocalStorage(); // Atualiza os dados no localStorage
  }

  // Método para salvar a lista de cadastros no localStorage
  atualizarLocalStorage() {
    localStorage.setItem('cadastros', JSON.stringify(this.lista));
  }

  // Método para resetar o formulário, limpando os campos
  resetarFormulario() {
    this.pessoa = {
      nome: '',
      cpf: '',
      dataNascimento: '',
      fidelidade: false,
      saldo: 0,
      telefone: '',
      endereco: {
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
      }
    };
  }
}
