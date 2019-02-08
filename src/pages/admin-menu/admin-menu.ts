import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-menu',
  templateUrl: 'admin-menu.html',
})
export class AdminMenuPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}  
  

 
  JornadasRegionPage() {
  
    this.navCtrl.push("JornadasRegionPage");
  }

 
  usuarios() {
  
    this.navCtrl.push("UsuariosPage");
  }
 

  ranking() {
  
    this.navCtrl.push("PreRankingMenuPage");
  }
  

}
