import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

result: any;
region_name: any;
region='';
public data: Observable<any>;
public name: any;
public password: any;


constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {


}



async adminMenu() {
  if (this.name == null || this.password == null) {

    alert("Porfavor ingrese todos los datos correspondientes");


  }

  else {

    var url = 'http://localhost:3000/login';
    let postData = {
      "user_name": this.name,
      "pass_login": this.password
    };

  

    this.data = this.http.post(url, postData);
    this.data.subscribe(data => {


      console.log(data[0].result+"result");
      console.log(data[0].name +"todo");

      
        if(data[0].result=="incorrect" || data[0].result=="not exist"){
          alert("usuario o contraseña incorrecta intente de nuevo");
        }   
      
      if(data[0].role=="god"){
        this.navCtrl.push('AdminMenuPage');
      }
      if(data[0].role=="admin"){
        this.navCtrl.push('AdminMenuPage');
      }
      if(data[0].role=="manager"){
        console.log(data[0].name);
        this.region = data[0].name;
        this.navCtrl.push('ManagersMenuPage',{region:this.region});
      }

      if(data[0].result=="incorrect"){
        alert("usuario o contraseña incorrecta")
      }
      if(data[0].result=="not exist"){

        alert("usuario o contraseña incorrecta")
      }


    });

  }
}

}

