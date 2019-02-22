import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import config from '../../config/production.js';


/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
  public rank:any;
  public p_region;
  public p_division;
  public p_group;
  public jornadas:any;
  public data:  Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.p_region = navParams.get('region');
    this.p_division = navParams.get('division');
    this.p_group = navParams.get('group');

   if(this.p_group!=null) {
     this.showRanking();
   }else{
    this.showRankingGeneral();
   }
    
  }

  showRanking(){


    let url = `${config.app.url}/jornadas/showRanking`;
    let datos = {
        "region" : this.p_region,
        "division" : this.p_division,
        "grupo" : this.p_group
    }
  
    this.data = this.http.post(url, datos);
    this.data.subscribe(data => {
        this.jornadas = data;
       
    })
  }


  showRankingGeneral(){


    let url = `${config.app.url}/jornadas/showGeneralRanking`;
    let datos = {
        "region" : this.p_region,
        "division" : this.p_division
    }
  
    this.data = this.http.post(url, datos);
    this.data.subscribe(data => {
        this.jornadas = data;
       
    })
  }

  editDAta(f){



    for (var item of this.jornadas) {
  
        if(item.id==f){
       

            console.log("ID"+f);
            console.log("RANKING"+item.id);
            this.rank=item;
            this.navCtrl.push("RankingDetailsPage",{jornada:this.rank});
        }
      }
     

  }


}
