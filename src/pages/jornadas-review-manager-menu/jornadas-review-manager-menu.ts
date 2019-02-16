import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the JornadasReviewManagerMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-review-manager-menu',
  templateUrl: 'jornadas-review-manager-menu.html',
})
export class JornadasReviewManagerMenuPage {

 
 
  region='';
  division='';
  group='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta: AlertController) {
   this.region= navParams.get('region');
   if (this.region== undefined) {
    this.navCtrl.push(HomePage);
  }
  }
  

  JornadasManagmentPage() {
   
 
    if (this.division == "" || this.group == "") {
    
      const alert = this.alerta.create({
        message: 'POR FAVOR INGRESE LOS DATOS CORRESPONDIENTES',
        buttons: ['ACEPTAR']
      });
      alert.present();
    } else {
    this.navCtrl.push("JornadasManagmentPage",{region:this.region,division:this.division,group:this.group});
  }
  }
}
