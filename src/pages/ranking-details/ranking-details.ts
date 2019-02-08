import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RankingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking-details',
  templateUrl: 'ranking-details.html',
})
export class RankingDetailsPage {
  public jornada:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.jornada=navParams.get('jornada');
  }

 

}
