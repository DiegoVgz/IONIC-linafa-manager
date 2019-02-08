import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  p_region:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
   this.p_region=navParams.get('region');
  }

 
  
  JornadasCreationAdminPage() {
 
    this.navCtrl.push("JornadasCreationAdminPage",{region:this.p_region,division:this.division,group:this.group,teams:this.teams});
  }

  

  
}
