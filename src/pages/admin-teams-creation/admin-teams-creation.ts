import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AdminTeamsCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-teams-creation',
  templateUrl: 'admin-teams-creation.html',
})
export class AdminTeamsCreationPage {

  public incomingTeam: any;
  public insertingTeam: any;
  public team: any;
  data: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.incomingTeam = navParams.get('creation');

  }

 
  insertaTeam() {
    this.insertingTeam = {
      "name_team": this.team,
      "region": this.incomingTeam.region,
      "division": this.incomingTeam.division,
      "group": this.incomingTeam.group
    }

    let url = 'http://localhost:3000/teams/addTeam';

    this.data = this.http.post(url, this.insertingTeam);
    this.data.subscribe(data => {
      console.log(data)
    })
  }

}
