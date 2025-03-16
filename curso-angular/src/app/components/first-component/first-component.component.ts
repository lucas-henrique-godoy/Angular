import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component', //Seletor que usamos para improtar um componente em outro
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']//Destina arquivos de css específicos para cada componente
})
export class FirstComponentComponent implements OnInit {
  //Propriedades/Variáveis que estão sendo mostradas no first-component.html
  name: string = "Lucas";
  age: number = 27;
  job = "Programador";
  hobbies = ["Correr", "Jogar", "Estudar"];
  car = {
    name: "Fiat Uno",
    year: 1995
  }
  
 constructor() { }

  ngOnInit(): void {
  }

}
