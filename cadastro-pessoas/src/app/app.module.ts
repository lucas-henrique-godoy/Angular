import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; //Necessário importar para usar o FormGroup

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './views/pessoas/pessoa/pessoa.component';


@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent, //Importar o componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule //Importar o module que será utilizado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
