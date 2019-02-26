import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Carro } from '../modelos/Carro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public carros: Carro[];

  constructor(public http:HttpClient){}

  ngOnInit(): void {
    this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')  
    .subscribe(
      (carros)=>{
        this.carros = carros;
      }
    )
  }
}
