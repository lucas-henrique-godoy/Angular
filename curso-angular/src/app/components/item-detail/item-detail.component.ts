import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal? : Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) { 
    this.getAnimal()
  }

  ngOnInit(): void {
  }

    getAnimal(){ //Acessando o service pegando os dados do  "banco": db.json
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
    }
}
