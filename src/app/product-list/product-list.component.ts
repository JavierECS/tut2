import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products = [
    {
      id: 1,
      name: 'Buebito',
      category: 'Comida',
      description: 'Huevo, duh',
      price: 5
    },
    {
      id: 2,
      name: 'Choco Krispis',
      category: 'Comida',
      description: 'Arroz inflado sabor chocolate',
      price: 30
    },
    {
      id: 3,
      name: 'Catsup',
      category: 'Condimento',
      description: 'Smoothie de tomates',
      price: 20
    },
    {
      id: 4,
      name: 'Rollo de papel higiénico',
      category: 'Higiene',
      description: 'Para limpiarse el fundillo',
      price: 80
    },
    {
      id: 5,
      name: 'Super Smash Bros Ultimate',
      category: 'Video juegos',
      description: 'Peleate con tus amigos en este divertido juego de peleas',
      price: 1499.99
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
