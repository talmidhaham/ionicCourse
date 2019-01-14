import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamsApi } from './../../providers/teams-api/teams-api';
import * as _ from 'lodash';

/**
 * Generated class for the Standing2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-standing2',
  templateUrl: 'standing2.html',
})
export class Standing2Page {

   public allStandings: any[];
  public divisionFilter = 'division';
  public standings: any[];
  public team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi : TeamsApi) {
    console.log('standing2 hello');
  }


  ngOnInit() {
        this.team = this.navParams.data;
    console.log(this.team);
    let tourneyData = this.eliteApi.getCurrentTourney();
    console.log(tourneyData);
    this.standings = tourneyData.standings;

    // this.allStandings =
    //   _.chain(this.standings)
    //    .groupBy('division')
    //    .toPairs()
    //    .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
    //    .value();

    console.log('standings:', this.standings); 
    //console.log('division Standings', this.allStandings);
    this.allStandings = tourneyData.standings;

    this.filterDivision(); 
  }

  ionViewLoaded() {
    this.team = this.navParams.data;
    console.log(this.team);
    let tourneyData = this.eliteApi.getCurrentTourney();
    console.log(tourneyData);
    this.standings = tourneyData.standings;

    // this.allStandings =
    //   _.chain(this.standings)
    //    .groupBy('division')
    //    .toPairs()
    //    .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
    //    .value();

       this.allStandings = tourneyData.standings;

    console.log('standings:', this.standings); 
    //console.log('division Standings', this.allStandings);
    //this.allStandings = tourneyData.standings;

    //this.filterDivision(); 
  }

  filterDivision(){
    if(this.divisionFilter === 'all'){
      this.standings = this.allStandings;
    } else {
      this.standings = _.filter(this.allStandings, s => s.division === this.team.division);
    }
  }

  getHeader(record, recordIndex, records){
    if (recordIndex === 0 || record.division !== records[recordIndex-1].division) {
      return record.division;

    }
    return null;  
  }

}
