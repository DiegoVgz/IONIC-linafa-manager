import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the JornadasEditReviewManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-edit-review-manager',
  templateUrl: 'jornadas-edit-review-manager.html',
})
export class JornadasEditReviewManagerPage {
  public jornada:any;
  public local_goals:any;
  public visitant_goals:any;
  public place:any;
  public date:any;
  public data:any;
  public time:any;

  p_division='';
  p_region='';
  p_group='';
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.jornada=navParams.get('jornada');
    this.p_region = navParams.get('region');
    this.p_division = navParams.get('division');
    this.p_group = navParams.get('group');
  }



  public(){

    this.jornada.local_goals= this.local_goals;
    this.jornada.visitant_goals= this.visitant_goals;
    this.jornada.place= this.place;
    this.jornada.jornada_date= this.date;
    this.jornada.match_hour= this.time;
    this.jornada.need_revision= false;
    this.jornada.published = true;
    this.data = this.http.post('http://localhost:3000/jornadas/editarJornadas', this.jornada);
    this.data.subscribe(data => {
    
    });


    console.log(this.jornada);
    this.data = this.http.post('http://localhost:3000/jornadas/ranking',this.jornada);
    this.data.subscribe(data => {
    
    });

   }


   reverse(){

    this.data = this.http.post('http://localhost:3000/jornadas/reverseRanking',this.jornada);
    this.data.subscribe(data => {
    
    });
  
  }
}
