import { Component, OnInit } from '@angular/core';
import { Carro } from '../modelos/Carro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  private carro: Carro
  private precoTotal: number

  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit() {

    this.activateRouter.queryParams.subscribe(params => {
      this.carro = <Carro>JSON.parse(params['carroSelecionado']);
      this.precoTotal = params.precoTotal;

      console.log(`O ${this.carro.nome} avancou com o preco de ${this.precoTotal}`);
    });

  }

}
