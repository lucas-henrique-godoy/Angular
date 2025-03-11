import { Component } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  standalone: true,
  imports: [CommonModule, CursoDetalheComponent]
})
export class CursosComponent {
   nomePortal: string;

   cursos: string[];

   constructor(private cursosService: CursosService){
     this.nomePortal = "http://loiane.training";

     /*for (let i=0; i<this.cursos.length; i++)
      {
         let curso = this.cursos[i];
      }*/

         this.cursos = this.cursosService.getCursos();
   }
}
