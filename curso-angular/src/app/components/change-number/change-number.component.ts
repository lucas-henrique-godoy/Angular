//É o componente filho que emite um evento para o componente pai chamado emitter-->
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.changeNumber.emit(); //Emitindo o evento
  }

}
