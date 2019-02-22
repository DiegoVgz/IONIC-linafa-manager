import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import config from '../../config/production.js';


/**
 * Generated class for the JornadasCreationAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-creation-admin',
  templateUrl: 'jornadas-creation-admin.html',
})
export class JornadasCreationAdminPage {

  region='';
   division='';
   group='';
   teams='';
  data: Observable<any>;
  public result: any;
  public team1: any;
  public team2: any;
  public team3: any;
  public team4: any;
  public team5: any;
  public team6: any;
  public team7: any;
  public team8: any;
  public team9: any;
  public team10: any;
  public team11: any;
  public team12: any;

  disableVariable2:any;
  disableVariable3:any;
  disableVariable4:any;
  newJornada='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alerta: AlertController) {

  
    this.teams=navParams.get('teams');

    console.log(this.teams);
    

    if (this.teams == '2'){

      this.disableVariable2=true;
      this.disableVariable3=true;
      this.disableVariable4=true;
    }

    else if  (this.teams == '4'){

      this.disableVariable2=false;
      this.disableVariable3=true;
      this.disableVariable4=true;
    }

    else if  (this.teams == '6'){

      console.log('im here');
      this.disableVariable2=false;
      this.disableVariable3=false;
      this.disableVariable4=true;
    }
    else if (this.teams == '8'){

      this.disableVariable2=false;
      this.disableVariable3=false;
      this.disableVariable4=false;
    }
    this.region=navParams.get('region');
    this.division=navParams.get('division');
    this.group=navParams.get('group');
    this.newJornada=navParams.get('newJornada');
    if (this.region== undefined||this.region=="") {
      this.navCtrl.push(HomePage);
    }
  }

  postJornadas() {

if (this.teams == '2' && this.newJornada=='true') {

 

  let jornadas = [

    {
      "p_round": "primera ronda",
      "p_jornada_name": "primera jornada",
      "p_region_name": this.region,
      "p_division_name": this.division,
      "p_group_name": this.group,
      "p_local_team_name": this.team1,
      "p_visitant_team_name": this.team2
    },


    {
      "p_round": "segunda ronda",
      "p_jornada_name": "primera jornada",
      "p_region_name": this.region,
      "p_division_name": this.division,
      "p_group_name": this.group,
      "p_local_team_name": this.team2,
      "p_visitant_team_name": this.team1
    }

  ]

  this.data =this.http.post(`${config.app.url}/jornadas/insertJornadas`, jornadas);
  this.data.subscribe(data => {
   
  
  });
  const alert = this.alerta.create({
    message: 'LA JORNADA HA SIDO CREADA CON EXITO',
    buttons: ['ACCEPTAR']
  });

   alert.present();
}




    if (this.teams == '4' && this.newJornada=='true') {



      console.log(this.teams);

      let jornadas = [

        {
          "p_round": "primera ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team3
        },


        {
          "p_round": "primera ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team4
        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team2

        },


        {

          "p_round": "primera ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team2

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team3

        },



        {
          "p_round": "segunda ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team1
        },


        {
          "p_round": "segunda ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team2
        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team4

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team3

        },


        {

          "p_round": "segunda ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team4

        },


      ]

      this.data =this.http.post(`${config.app.url}jornadas/insertJornadas`, jornadas);
      this.data.subscribe(data => {
       
      
      });
      const alert = this.alerta.create({
        message: 'LA JORNADA HA SIDO CREADA CON EXITO',
        buttons: ['ACCEPTAR']
      });
  
       alert.present();

    }


    if (this.teams == '6' && this.newJornada=='true') {
   
      let jornadas = [

        {
          "p_round": "primera ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team3
        },


        {
          "p_round": "primera ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team2
        },

        {
          "p_round": "primera ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team6
        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team5

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team4

        },



        {

          "p_round": "primera ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team4

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team2

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team6

        },


        {

          "p_round": "primera ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team3

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team6

        },


        {

          "p_round": "primera ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team5

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team3

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team1

        },



        {
          "p_round": "segunda ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team1
        },


        {
          "p_round": "segunda ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team4
        },

        {
          "p_round": "segunda ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team5
        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team3

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team2

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team6

        },



        {

          "p_round": "segunda ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team5

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team3

        },


        {

          "p_round": "segunda ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team4

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team5

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team2

        },


        {

          "p_round": "segunda ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team4

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team2

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team6

        },

      ]

      this.data =this.http.post(`${config.app.url}/jornadas/insertJornadas`, jornadas);
      this.data.subscribe(data => {
       
      
      });

      const alert = this.alerta.create({
        message: 'LA JORNADA HA SIDO CREADA CON EXITO',
        buttons: ['ACCEPTAR']
      });
  
       alert.present();

    }

    if (this.teams == '8' && this.newJornada=='true') {
    
      let jornadas = [

        {
          "p_round": "primera ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team8,
          "p_visitant_team_name": this.team7
        },


        {
          "p_round": "primera ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team6
        },

        {
          "p_round": "primera ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team5
        },

        {
          "p_round": "primera ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team4
        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team8

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team2
        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team7

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team8,
          "p_visitant_team_name": this.team6

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team7,
          "p_visitant_team_name": this.team5

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team4

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team3

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team8

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team7

        },
     
        {

          "p_round": "primera ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team6

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team8,
          "p_visitant_team_name": this.team5

        },

    

        {

          "p_round": "primera ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team4

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team7,
          "p_visitant_team_name": this.team3

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team2

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "sexta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team8

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "sexta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team7

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "sexta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team6

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "sexta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team5

        },
        {

          "p_round": "primera ronda",
          "p_jornada_name": "septima jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team8,
          "p_visitant_team_name": this.team4

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "septima jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team3

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "septima jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team2

        },

        {

          "p_round": "primera ronda",
          "p_jornada_name": "septima jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team7,
          "p_visitant_team_name": this.team1

        },

        {
          "p_round": "segunda ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team7,
          "p_visitant_team_name": this.team8
        },


        {
          "p_round": "segunda ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team1
        },

        {
          "p_round": "segunda ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team2
        },

        {
          "p_round": "segunda ronda",
          "p_jornada_name": "primera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team3
        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team8,
          "p_visitant_team_name": this.team3

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team4
        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team5

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "segunda jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team7,
          "p_visitant_team_name": this.team6

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team8

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team7

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "tercera jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team2

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team8,
          "p_visitant_team_name": this.team2

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team3

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team7,
          "p_visitant_team_name": this.team4

        },
     
        {

          "p_round": "segunda ronda",
          "p_jornada_name": "cuarta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team5

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team8

        },

    

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team6

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team7

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "quinta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "sexta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team8,
          "p_visitant_team_name": this.team1

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "sexta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team7,
          "p_visitant_team_name": this.team2

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "sexta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team6,
          "p_visitant_team_name": this.team3

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "sexta jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team5,
          "p_visitant_team_name": this.team4

        },
        {

          "p_round": "segunda ronda",
          "p_jornada_name": "septima jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team4,
          "p_visitant_team_name": this.team8

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "septima jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team3,
          "p_visitant_team_name": this.team5

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "septima jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team2,
          "p_visitant_team_name": this.team6

        },

        {

          "p_round": "segunda ronda",
          "p_jornada_name": "septima jornada",
          "p_region_name": this.region,
          "p_division_name": this.division,
          "p_group_name": this.group,
          "p_local_team_name": this.team1,
          "p_visitant_team_name": this.team7

        },

      ]

      this.data =this.http.post(`${config.app.url}/jornadas/insertJornadas`, jornadas);
      this.data.subscribe(data => {
       
      
      });


      const alert = this.alerta.create({
        message: 'LA JORNADA HA SIDO CREADA CON EXITO',
        buttons: ['ACCEPTAR']
      });
  
       alert.present();
    }

    if(this.newJornada=='true'){

      const alert = this.alerta.create({
        message: 'LA JORNADA YA HA SIDO CREADA',
        buttons: ['ACCEPTAR']
      });
  
       alert.present();


    }
    
  }



}
