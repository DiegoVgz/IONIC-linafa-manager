import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminTeamsReviewMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-teams-review-menu',
  templateUrl: 'admin-teams-review-menu.html',
})
export class AdminTeamsReviewMenuPage {

  public region:any;
  public division:any;
  public grupo:any;
  public p_division='';
  public p_group='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  this.region=navParams.get('region');
  }


  AdminTeamsReviewPage() {
  this.p_division=this.division;
  this.p_group = this.grupo;
  this.navCtrl.push("AdminTeamsReviewPage",{region:this.region,division:this.p_division,group:this.p_group});
  }

}
