import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RankingMenuGeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking-menu-general',
  templateUrl: 'ranking-menu-general.html',
})
export class RankingMenuGeneralPage {
  public region = '';
  public division = '';
  public group = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerta:AlertController) {
  }

   JornadasReviewPage() {
    console.log(this.division);
    if(this.region=="" || this.division==""){
      console.log(this.division);
      const alert = this.alerta.create({
        message: 'PORFAVOR INGRESE LOS DATOS CORRESPONDIENTES',
        buttons: ['ACCEPTAR']
      });
  
       alert.present();


    }else{
    this.navCtrl.push("RankingPage", { region: this.region, division: this.division, group: this.group });
  }
   }
}
