import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JornadasCreationManagerMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-creation-manager-menu',
  templateUrl: 'jornadas-creation-manager-menu.html',
})
export class JornadasCreationManagerMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  JornadasCreationManagerPage() {
  
    this.navCtrl.push("JornadasCreationManagerPage");
  }
  

}
