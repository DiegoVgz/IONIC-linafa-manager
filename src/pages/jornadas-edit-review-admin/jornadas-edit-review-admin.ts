import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the JornadasEditReviewAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-edit-review-admin',
  templateUrl: 'jornadas-edit-review-admin.html',
})
export class JornadasEditReviewAdminPage {

  public jornada:any;
  public local_goals:any;
  public visitant_goals:any;
  public place:any;
  public date:any;
  public data:any;
  public time:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  
    this.jornada=navParams.get('jornada');
    console.log(this.jornada);
  }

  
 public(){

  this.jornada.local_goals= this.local_goals;
  this.jornada.visitant_goals= this.visitant_goals;
  this.jornada.place= this.place;
  this.jornada.jornada_date= this.date;
  this.jornada.match_hour= this.time;
  console.log(this.jornada);
  this.data = this.http.post('http://localhost:3000/jornadas/editarJornadas', this.jornada);
  this.data.subscribe(data => {
  
  });

 }

}
