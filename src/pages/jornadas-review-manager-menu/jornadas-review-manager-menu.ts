import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

 
  group:any;
  division:any;
  region='';
  p_division='';
  p_group='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.region= navParams.get('region');
  }
  

  JornadasManagmentPage() {
    this.p_division=this.division;
    this.p_group=this.group;
  
    this.navCtrl.push("JornadasManagmentPage",{region:this.region,division:this.p_division,group:this.p_group});
  }

}
