import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal'; //Importando a interface Animal

import { ListService } from 'src/app/services/list.service'; //Importando Service List

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];
  
  
   
  animalDetails = '';

  constructor(private listService: ListService) { //Inicializando e injetando  o service no componente
    this.getAnimals()
  } 

  ngOnInit(): void { }

  
  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    this.animals.filter((a) => animal.name !== a.name)
    this.listService.remove(this.animals, animal); // Chama o método 'remove' do service
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
