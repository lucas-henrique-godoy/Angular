//É o componente filho-->
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    console.log("Mudou o número!");
  }

}
