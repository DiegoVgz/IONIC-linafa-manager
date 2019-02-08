import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the JornadasEditUsersAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-edit-users-admin',
  templateUrl: 'jornadas-edit-users-admin.html',
})
export class JornadasEditUsersAdminPage {

 
  public name:any;
  public pass:any;
  public phone:any;
  public data:any;
  public p_id='';
  public p_name ='';
  public p_pass='';
  public p_phone='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.p_id = navParams.get('p_id');
    this.p_name= navParams.get('p_name');
    this.p_pass= navParams.get('p_pass');
    this.p_phone= navParams.get('p_phone');
    console.log(this.p_id);
  }

  edit(){
  
  let user= 
    {
      "id": this.p_id,
      "user_name": this.name,
      "pass_login": this.pass,
      "phone_number": this.phone
    }
  
    console.log(this.name);
  this.data = this.http.post('http://localhost:3000/user', user);
  this.data.subscribe(data => {
  
  });
  
  }


}
