import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminTeamsCreationMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-teams-creation-menu',
  templateUrl: 'admin-teams-creation-menu.html',
})
export class AdminTeamsCreationMenuPage {
  public region = '';
  public division = '';
  public grupo = '';
  public creationTeam: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  AdminTeamsCreationPage() {
    this.creationTeam = {
      "region": this.region,
      "division": this.division,
      "group": this.grupo
    }
    console.log(this.creationTeam)
    this.navCtrl.push("AdminTeamsCreationPage", {creation: this.creationTeam});
  }

}
