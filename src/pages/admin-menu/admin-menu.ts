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
  

  JornadasCreationPage() {
  
    this.navCtrl.push("JornadasCreationPage");
  }

  JornadasRegionPage() {
  
    this.navCtrl.push("JornadasRegionPage");
  }

 
  usuarios() {
  
    this.navCtrl.push("UsuariosPage");
  }
 

  AdminTeamsCreationMenuPage() {
  
    this.navCtrl.push("AdminTeamsCreationMenuPage");
  }

  AdminTeamsReviewMenuPageModule() {
  
    this.navCtrl.push("AdminTeamsReviewMenuPage");
  }


}
