import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import config from '../../config/production.js';


/**
 * Generated class for the JornadasReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-jornadas-review',
    templateUrl: 'jornadas-review.html',
})
export class JornadasReviewPage {

    public round: any;
    public p_region;
    public p_division;
    public p_group;
    public jornadas: any;
    public roundTwo: any;
    public data: Observable<any>;
    public data2: Observable<any>;
    public data3: Observable<any>;
    public jsonData: any;




    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
        this.p_region = navParams.get('region');
        this.p_division = navParams.get('division');
        this.p_group = navParams.get('group');
        this.getJornadas();
        this.segundaRonda();
    }

    getJornadas() {
        let url = `${config.app.url}/jornadas/send_to_publish`;
        let datos = {
            "region": this.p_region,
            "division": this.p_division,
            "grupo": this.p_group
        }

        this.data = this.http.post(url, datos);
        this.data.subscribe(data => {
            this.jornadas = data;

        })
    }


    editDAta(f) {


        for (var item of this.jornadas) {

            if (item.id == f) {

                console.log(item);
                this.navCtrl.push("JornadasEditReviewAdminPage", { jornada: item, region: this.p_region, division: this.p_division, group: this.p_group });

            }
        }

    }

    segundaRonda() {



        let url = `${config.app.url}/jornadas/jornadasSecondRound`;
        let datos = {
            "region": this.p_region,
            "division": this.p_division,
            "grupo": this.p_group
        }

        this.data2 = this.http.post(url, datos);
        this.data2.subscribe(data => {
            this.roundTwo = data;



        })






    }

    secondRound() {




        this.round = 'segunda ronda';
        console.log(this.roundTwo);
        this.jsonData = this.roundTwo;
        var count = 1;
        for (var item2 of this.roundTwo) {

            this.jsonData[count] = item2;
            this.jsonData[count].round = this.round;


        }



        console.log(this.jsonData);

        this.data3 = this.http.post(`${config.app.url}/jornadas/insertJornadasTwo`, this.jsonData);
        this.data3.subscribe(data => {


        });

    }

}
