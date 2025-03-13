import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component', //Seletor que usamos para improtar um componente em outro
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
