import { Component } from '@angular/core';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosComponent } from "./cursos/cursos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MeuPrimeiroComponent, MeuPrimeiro2Component, CursosComponent]
})
export class AppComponent {
  title = 'Olá Mundo!';
}
