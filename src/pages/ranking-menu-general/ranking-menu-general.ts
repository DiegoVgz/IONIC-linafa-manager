import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   JornadasReviewPage() {
    this.navCtrl.push("RankingPage", { region: this.region, division: this.division, group: this.group });
  }

}
