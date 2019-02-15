import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the AdminTeamsCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-teams-creation',
  templateUrl: 'admin-teams-creation.html',
})
export class AdminTeamsCreationPage {

  public incomingTeam: any;
  public insertingTeam: any;
  public team: any;

  respuesta: any;
  data: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alerta: AlertController) {
    this.incomingTeam = navParams.get('creation');
    if (this.incomingTeam == undefined) {
      this.navCtrl.push(HomePage);
    }
  }


  insertaTeam() {
    this.insertingTeam = {
      "name_team": this.team,
      "region": this.incomingTeam.region,
      "division": this.incomingTeam.division,
      "group": this.incomingTeam.group
    }
    if (this.team == null) {
      const alert = this.alerta.create({
        message: 'PORFAVOR INGRESE LOS DATOS CORRESPONDIENTES',
        buttons: ['ACCEPTAR']
      });

      alert.present();
    } else {

      let url = 'http://localhost:3000/teams/addTeam';

      this.data = this.http.post(url, this.insertingTeam);
      this.data.subscribe(data => {
        console.log(data)
      })

      const alert = this.alerta.create({
        message: 'EL EQUIPO HA SIDO INGRESADO EXITOSAMENTE',
        buttons: ['ACEPTAR']
      });

      alert.present();
      this.team = null;
    }

  }


  async presentAlertConfirm() {
    const alerta = await this.alerta.create({

      message: '<strong>¿ESTA SEGURO QUE DESEA ELIMINAR LOS EQUIPOS?</strong>',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: cancelar');
          }
        }, {
          text: 'ACCEPTAR',
          handler: () => {
            this.deleteALL();

            const alert = this.alerta.create({
              message: 'LOS EQUIPOS HAN SIDO ELIMINADOS EXITOSAMENTE',
              buttons: ['ACCEPTAR']
            });

            alert.present();

          }
        }
      ]
    });

    await alerta.present();
  }

  deleteALL() {


    let url = 'http://localhost:3000/teams/deleteTeam';

    let data = {
      "region": this.incomingTeam.region,
      "division": this.incomingTeam.division,
      "group": this.incomingTeam.group
    }
    this.respuesta = this.http.post(url, data);
    this.respuesta.subscribe(respuesta => {


    })



  }

}
