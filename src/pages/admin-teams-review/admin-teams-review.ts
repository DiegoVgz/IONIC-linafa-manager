import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

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
    console.log(this.region);
    this.getTeams();
  }

  getTeams() {
    let url = 'http://localhost:3000/teams/allTeams';
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


  editDAta(f) {


    for (var item of this.teams) {

      if (item.id == f) {
        let url = 'http://localhost:3000/teams/deleteTeam';
        let id = {

          "id": f
        }

        this.respuesta = this.http.post(url, id);
        this.respuesta.subscribe(respuesta => {


        })


      }
    }

  }


}
