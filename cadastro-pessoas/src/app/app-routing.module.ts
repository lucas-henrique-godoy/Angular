import { PessoaComponent } from './views/pessoas/pessoa/pessoa.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{path: "home", component: AppComponent},
  {path: "pessoa", component: PessoaComponent }// Criei a rota para o formulário de cadastro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
