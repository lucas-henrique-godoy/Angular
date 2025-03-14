import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component', //Seletor que usamos para improtar um componente em outro
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
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
