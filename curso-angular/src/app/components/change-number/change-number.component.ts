import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Console } from 'console';
import { cwd } from 'process';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber:  EventEmitter<any> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.changeNumber.emit();
  }

}
