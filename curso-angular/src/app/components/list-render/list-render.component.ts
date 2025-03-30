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
  
  animal: Animal ={
    name: 'Teste',
    type: 'Alguma coisa',
    age: 10,
  };
   
  animalDetails = '';

  constructor(private listService: ListService) { //Inicializando e injetando  o service no componente
    this.getAnimals()
  } 

  ngOnInit(): void { }

  
  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log("Removendo animal...")   // Exibe uma mensagem no console para indicar a remoção
    this.animals = this.listService.remove(this.animals, animal); // Chama o método 'remove' do service
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
