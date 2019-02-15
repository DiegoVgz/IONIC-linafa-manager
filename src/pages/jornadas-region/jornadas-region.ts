import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the JornadasRegionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-region',
  templateUrl: 'jornadas-region.html',
})
export class JornadasRegionPage {


  public region: '';
  public division: '';
  public group: '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta: AlertController) {
  }


  JornadasReviewPage() {
    if (this.region == undefined || this.division == undefined || this.group == undefined) {
      const alert = this.alerta.create({
        message: 'POR FAVOR INGRESE LOS DATOS CORRESPONDIENTES',
        buttons: ['ACEPTAR']
      });
      alert.present();
    } else {
      this.navCtrl.push("JornadasReviewPage", { region: this.region, division: this.division, group: this.group });
    }
  }


}
