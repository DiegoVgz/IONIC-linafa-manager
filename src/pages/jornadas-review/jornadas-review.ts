import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the JornadasReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-review',
  templateUrl: 'jornadas-review.html',
})
export class JornadasReviewPage {

  public p_region
  public p_division
  public p_group
  public jornadas:any;
  public data: Observable<any>;



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
      this.p_region = navParams.get('region');
      this.p_division = navParams.get('division');
      this.p_group = navParams.get('group');
      this.getJornadas();
  }

  getJornadas() {
      let url = 'http://localhost:3000/jornadas/jornadasReview';
      let datos = {
          "region" : this.p_region,
          "division" : this.p_division,
          "grupo" : this.p_group
      }
    
      this.data = this.http.post(url, datos);
      this.data.subscribe(data => {
          this.jornadas = data;
          console.log(this.jornadas)
      })
  }
 
    
    editDAta(f){


      for (var item of this.jornadas) {
    
          if(item.id==f){
         
              console.log(item);
          this.navCtrl.push("JornadasEditReviewAdminPage",{jornada:item});
    
          }
        }
    
    }

}
