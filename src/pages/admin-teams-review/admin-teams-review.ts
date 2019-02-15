import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import config from '../../config/production.js';

/**
 * Generated class for the AdminTeamsReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-teams-review',
  templateUrl: 'admin-teams-review.html',
})
export class AdminTeamsReviewPage {

  public region: any;
  public division: any;
  public group: any;
  public respuesta: any;
  public data: Observable<any>;
  public teams: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

    this.region = navParams.get('region');
    this.division = navParams.get('division');
    this.group = navParams.get('group');
    if (this.region == undefined){
      this.navCtrl.push(HomePage);
    }
    this.getTeams();
  }

  getTeams() {
    let url = `${config.app.url}/teams/allTeams`;
    let datos = {
      "region": this.region,
      "division": this.division,
      "group": this.group
    }
    console.log(this.division);
    this.data = this.http.post(url, datos);
    this.data.subscribe(data => {
      this.teams = data;
      console.log(this.teams)
    })
  }



}
