import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import config from '../../config/production.js';


/**
 * Generated class for the JornadasManagmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-managment',
  templateUrl: 'jornadas-managment.html',
})
export class JornadasManagmentPage {
    p_division='';
    p_region='';
    p_group='';
    data:any;
    jornadas:any;

    constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
        this.p_region = navParams.get('region');
        this.p_division = navParams.get('division');
        this.p_group = navParams.get('group');

        if (this.p_region== undefined) {
            this.navCtrl.push(HomePage);
          }
        this.getJornadas();
     }

     getJornadas() {
        let url = `${config.app.url}/jornadas/send_to_publish`;
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
                this.navCtrl.push("JornadasEditReviewManagerPage",{jornada:item,region:this.p_region,division:this.p_division,group:this.p_group});
      
            }
          }
      
         
      }
  
}
