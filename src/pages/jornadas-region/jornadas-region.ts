import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

 
  public region = '';
  public division = '';
  public group = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  JornadasReviewPage() {
    this.navCtrl.push("JornadasReviewPage", { region: this.region, division: this.division, group: this.group });
  }
 

}
