import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../modelos/Carro';
import { Acessorio } from '../modelos/Acessorio';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {
  
  private carro: Carro
  private acessorios: Acessorio []
  private valorTotalCarro: number

  

  constructor(private navCtrl: NavController,
              private activateRouter: ActivatedRoute) { }

  
  ngOnInit() {
    this.activateRouter.queryParams.subscribe(
      params => {
        this.carro = JSON.parse(params['carroSelecionado']);

      console.log(`O carro chegou que chegou é: ${this.carro.nome}`);
    });


    this.acessorios = [{acessorio: 'Freio ABS', preco: 800},
                      {acessorio: 'Ar-Condicionado', preco: 1000},
                      {acessorio: 'MP3 Player', preco: 500}];

    this.valorTotalCarro = this.carro.preco;
  }

  valorTotal(ativo: boolean, acessorio: Acessorio) {
    ativo ? this.valorTotalCarro += acessorio.preco : this.valorTotalCarro -= acessorio.preco;
  }
  voltar() {
    this.navCtrl.back();
  }
}
