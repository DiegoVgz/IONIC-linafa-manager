import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    console.log(config.app.url);
  }



  async adminMenu() {

    if (this.name == null || this.password == null) {

      alert("Porfavor ingrese todos los datos correspondientes");


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
          alert("usuario o contraseña incorrecta intente de nuevo");
          this.name = null;
          this.password = null;
        }

        if (data[0].role == "god" && data[0].programaStatus == "1") {
          this.navCtrl.push('AdminMenuPage');
        }
        if (data[0].role == "admin" && data[0].programaStatus == "1") {
          this.navCtrl.push('AdminMenuPage');
        }
        if (data[0].role == "manager" && data[0].programaStatus == "1") {
          console.log(data[0].name);
          this.region = data[0].name;
          this.navCtrl.push('ManagersMenuPage', { region: this.region });
        }
      });

    }
  }

}

