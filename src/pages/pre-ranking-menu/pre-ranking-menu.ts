import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreRankingMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-ranking-menu',
  templateUrl: 'pre-ranking-menu.html',
})
export class PreRankingMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  rankingByGroup() {
    
    this.navCtrl.push('RankingMenuPage');
  }

  rankingGeneral() {
    
    this.navCtrl.push('RankingMenuGeneralPage');
  }

}
