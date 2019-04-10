import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../modelos/Carro';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {
  
  private carro: Carro

  constructor(private navCtrl: NavController,
              private activateRouter: ActivatedRoute) { }
  
  acessorios = [{acessorio: 'Freio ABS', preco: 800},
                {acessorio: 'Ar-Condicionado', preco: 1000},
                {acessorio: 'MP3 Player', preco: 500}]

  ngOnInit() {
    this.activateRouter.queryParams.subscribe(
      params => {
        this.carro = JSON.parse(params['carroSelecionado']);

      console.log(`O carro chegou que chegou é: ${this.carro.nome}`);
    });

  }

  voltar() {
    this.navCtrl.back();
  }
}
