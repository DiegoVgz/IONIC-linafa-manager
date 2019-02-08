import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

    this.region=navParams.get('region');
    this.division=navParams.get('division');
    this.group=navParams.get('group');
    this.teams=navParams.get('teams');

  }

  postJornadas() {

if (this.teams == '2') {

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

  this.data =this.http.post('http://localhost:3000/jornadas/insertJornadas', jornadas);
  this.data.subscribe(data => {
   
  
  });

}




    if (this.teams == '4') {

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

      this.data =this.http.post('http://localhost:3000/jornadas/insertJornadas', jornadas);
      this.data.subscribe(data => {
       
      
      });


    }


    if (this.teams == '6') {
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

      this.data =this.http.post('http://localhost:3000/jornadas/insertJornadas', jornadas);
      this.data.subscribe(data => {
       
      
      });



    }

    if (this.teams == '8') {
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

      this.data =this.http.post('http://localhost:3000/jornadas/insertJornadas', jornadas);
      this.data.subscribe(data => {
       
      
      });

    }

    
  }



}
