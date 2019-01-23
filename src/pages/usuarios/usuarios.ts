import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  public rows: any;
  public id: any;
  public other:any;

  p_id='';
  p_name='';
  p_pass='';
  p_phone='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

    this.getData();
  }

  getData() {

    let data: Observable<any> = this.http.get('http://192.168.2:3000/user');
    data.subscribe(
      data => {
        this.rows = data[0];
        console.log(this.rows);
        
      }

    )

  }


editDAta(f){


  for (var item of this.rows) {

      if(item.id==f){

        this.p_id = item.id;
        this.p_name= item.user_name;
        this.p_pass= item.pass_login;
        this.p_phone= item.phone_number;

     
      this.navCtrl.push("JornadasEditUsersAdminPage",{p_id:this.p_id,p_name:this.p_name,p_pass:this.p_pass,p_phone:this.p_phone});

      }
    }

}



}
