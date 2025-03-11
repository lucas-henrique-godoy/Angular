import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
//import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    //CursoDetalheComponent  // Declaramos apenas o CursoDetalheComponent, já que CursosComponent é standalone
  ],
  imports: [
    CommonModule,
    //CursosComponent
  ],
  exports: [
    //CursoDetalheComponent  // Exportamos apenas o CursoDetalheComponent (se necessário)
    //CursosComponent
  ]
})
export class CursosModule { }
