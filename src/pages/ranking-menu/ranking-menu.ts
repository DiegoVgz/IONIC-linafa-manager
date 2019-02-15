import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RankingMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking-menu',
  templateUrl: 'ranking-menu.html',
})
export class RankingMenuPage {

  public region = '';
  public division = '';
  public group = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerta:AlertController) {
  }

   JornadasReviewPage() {

    if(this.region==undefined || this.division==undefined || this.group==undefined){
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
