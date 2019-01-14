import { TeamsApi } from './../../providers/teams-api/teams-api';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import * as _ from 'lodash'

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  private allTeams: any;
  private allTeamDivisions: any;
  public teams = [];
  public queryText: string;
  // teams = [

  //   { id: 1, name: 'HC Elite' },

  //       { id: 2, name: 'Team Takeover' },

  //           { id: 3, name: 'DC Thunder' }

  //             ];


  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi : TeamsApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
    let seletctedTourney = this.navParams.data;
    this.eliteApi.getTournamentData(seletctedTourney.id).subscribe(data => {
      this.teams = data.teams;
    })
  }


  itemTapped($event,team)
  {
    this.navCtrl.push(TeamHomePage,team);

  }

    updateTeams(){
    let queryTextLower = this.queryText.toLowerCase();
    let filteredTeams = [];
    _.forEach(this.allTeamDivisions, td => {
      let teams = _.filter(td.divisionTeams, t => (<any>t).name.toLowerCase().includes(queryTextLower));
      if (teams.length) {
        filteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams });
      }
    });

    this.teams = filteredTeams;
  }
}
