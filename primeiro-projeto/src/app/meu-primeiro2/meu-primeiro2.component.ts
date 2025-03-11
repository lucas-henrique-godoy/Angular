import { Component } from '@angular/core';
import { CursosComponent } from '../cursos/cursos.component';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css'],
  standalone: true,
  imports:[CursosComponent]
})
export class MeuPrimeiro2Component {

}
