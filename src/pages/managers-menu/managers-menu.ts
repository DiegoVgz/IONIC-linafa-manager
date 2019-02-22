import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ManagersMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-managers-menu',
  templateUrl: 'managers-menu.html',
})
export class ManagersMenuPage {

  region='';
  region2='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.region2 = navParams.get('region');
  if(this.region2==undefined || this.region2==''){
    if (this.region== undefined) {
      this.navCtrl.push(HomePage);
    }
  }else{
    this.region=this.region2;
  }

  console.log(this.region);

  }


  
  JornadasCreationPage() {
  
    this.navCtrl.push("JornadasCreationPage",{region:this.region});
  }
  JornadasReviewManagerMenuPage() {
  
    this.navCtrl.push("JornadasReviewManagerMenuPage",{region:this.region});
  }
  
  rankingMenu() {
  
    this.navCtrl.push("PreRankingMenuPage");
  }

  AdminTeamsCreationMenuPage() {
  
    this.navCtrl.push("AdminTeamsCreationMenuPage",{region:this.region});
  }

  AdminTeamsReviewMenuPageModule() {
  
    this.navCtrl.push("AdminTeamsReviewMenuPage",{region:this.region});
  }

}
