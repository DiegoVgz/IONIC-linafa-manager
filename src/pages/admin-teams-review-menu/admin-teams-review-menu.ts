import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AdminTeamsReviewMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-teams-review-menu',
  templateUrl: 'admin-teams-review-menu.html',
})
export class AdminTeamsReviewMenuPage {

  public region:any;
  public division:any;
  public grupo:any;
  public p_division='';
  public p_group='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public alerta:AlertController) {
 
  this.region=navParams.get('region');

  if (this.region == undefined){
    this.navCtrl.push(HomePage);
  }

  }


  AdminTeamsReviewPage() {

    if(this.division==undefined || this.grupo==undefined){
      console.log(this.division);
      const alert = this.alerta.create({
        message: 'PORFAVOR INGRESE LOS DATOS CORRESPONDIENTES',
        buttons: ['ACCEPTAR']
      });
  
       alert.present();


    }else{
  this.p_division=this.division;
  this.p_group = this.grupo;
  this.navCtrl.push("AdminTeamsReviewPage",{region:this.region,division:this.p_division,group:this.p_group});
  }
  }
}
