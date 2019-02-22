import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import config from '../../config/production.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  result: any;
  region_name: any;
  region = '';
  public data: Observable<any>;
  public name: any;
  public password: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alerta:AlertController) {
    console.log(config.app.url);
  }



  async adminMenu() {

    if (this.name == null || this.password == null ) {

      const alert = this.alerta.create({
        message: 'PORFAVOR INGRESE LOS DATOS CORRESPONDIENTES',
        buttons: ['ACCEPTAR']
      });
  
       alert.present();

    }

    else {
      var url = `${config.app.url}/login`;
      console.log(url);
      let postData = {
        "user_name": this.name,
        "pass_login": this.password
      };



      this.data = this.http.post(url, postData);
      this.data.subscribe(data => {


        console.log(data[0].result + "result");
        console.log(data[0].name + "todo");
        console.log(data[0]);

        if (data[0].result == "incorrect" || data[0].result == "not exist" || data[0].programaStatus == "0") {

          const alert = this.alerta.create({
            message: 'NOMBRE DE USUARIO O CONTRASEÑA INCORRECTA',
            buttons: ['ACCEPTAR']
          });
      
           alert.present();
          this.name = null;
          this.password = null;
        }

        if(data[0].status=='bloqueado'){

          const alert = this.alerta.create({
            message: 'SU CUENTA SE HA BLOAQUEADO CONTACTE AL ADMINISTRADOR',
            buttons: ['ACCEPTAR']
          });
      
           alert.present();
        }


        if (data[0].role == "god" && data[0].programaStatus == "1" && data[0].status!='bloqueado') {
          this.navCtrl.push('AdminMenuPage');
        }
        if (data[0].role == "admin" && data[0].programaStatus == "1" && data[0].status!='bloqueado') {
          this.navCtrl.push('AdminMenuPage');
        }
        if (data[0].role == "manager" && data[0].programaStatus == "1" && data[0].status!='bloqueado') {
          this.region = data[0].name;
          this.navCtrl.push('ManagersMenuPage', { region: this.region });
        }
      });

    }
  }

}

