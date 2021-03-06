import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the JornadasCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-creation',
  templateUrl: 'jornadas-creation.html',
})
export class JornadasCreationPage {
  
  division='';
  group='';
  teams='';
  newJornada='true';
  p_region:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta: AlertController) {
  
   this.p_region=navParams.get('region');
   if (this.p_region== undefined || this.p_region== "") {
    this.navCtrl.push(HomePage);
  }
  console.log(this.p_region);
  }

 
  
  JornadasCreationAdminPage() {

    if(this.division=="" || this.group==""){
      console.log(this.division);
      const alert = this.alerta.create({
        message: 'POR FAVOR INGRESE LOS DATOS CORRESPONDIENTES',
        buttons: ['ACCEPTAR']
      });
  
       alert.present();


    }else{

    this.navCtrl.push("JornadasCreationAdminPage",{region:this.p_region,division:this.division,group:this.group,teams:this.teams,newJornada:this.newJornada});
  }

}

  
}
