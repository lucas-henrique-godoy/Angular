import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true;
  name: string = 'Lucas'; //se mudar o valor entra no else

  constructor() { }

  ngOnInit(): void {
  }

}
