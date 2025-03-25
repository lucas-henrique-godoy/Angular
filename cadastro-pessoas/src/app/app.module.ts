import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Necessário importar para usar o FormGroup
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


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
    ReactiveFormsModule, //Importar o module que será utilizado
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
