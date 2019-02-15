import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  region: any;
  public division = '';
  public grupo = '';
  public creationTeam: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alerta:AlertController) {
    this.region = navParams.get('region');
   
    if (this.region == undefined){
      this.navCtrl.push(HomePage);
    }
 
  }


  AdminTeamsCreationPage() {

    if(this.division=="" || this.grupo==""){
      console.log(this.division);
      const alert = this.alerta.create({
        message: 'POR FAVOR INGRESE LOS DATOS CORRESPONDIENTES',
        buttons: ['ACCEPTAR']
      });
  
       alert.present();


    }else{

       this.creationTeam = {
      "region": this.region,
      "division": this.division,
      "group": this.grupo
    }
    console.log(this.creationTeam)
    this.navCtrl.push("AdminTeamsCreationPage", { creation: this.creationTeam });
    }
   
  }

}
