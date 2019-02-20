import { Component, OnInit } from '@angular/core';
import { Carro } from '../modelos/Carro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public carro: Carro[];

  ngOnInit(): void {
    this.carro = [
      {
        nome: "Fusca",
        preco: 1000
      },{
        nome: "Ferrari",
        preco: 2000
      },{
        nome: "teste",
        preco: 2000
      },{
        nome: "Gol",
        preco: 2000
      },{
        nome: "Astra",
        preco: 3000
      }]
  }
}
