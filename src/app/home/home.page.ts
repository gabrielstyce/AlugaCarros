import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { Carro } from '../modelos/Carro';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { CarrosService } from '../providers/carros.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public carros: Carro[];

  constructor(private loadingCt: LoadingController,
              private alertCt: AlertController,
              private carrosService: CarrosService,
              private navCtrl: NavController) { }

  async ngOnInit() {
    const loading = await this.loadingCt.create(
      {
        message:'Aguarde o carregamento dos carros...'
      });
      await loading.present();

      this.carrosService.lista().subscribe((carros) => {
        this.carros = carros;
      },
      async (err: HttpErrorResponse) => {
        console.log('Deu erro' + err.status);
        const al = await this.alertCt.create(
          {
            header: 'Erro!',
            message: 'Erro ao listar carros',
            buttons: [{text: 'OK'}]
          });

          await al.present();
      }).add(
        () => {
          loading.dismiss();
        }
      );
  }

  selecionaCarro(carro: Carro){
    console.log(`Carro selecionado: ${carro.nome}`);
    this.navCtrl.navigateForward('escolha');
  }

}
