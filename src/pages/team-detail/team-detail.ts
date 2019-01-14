import { Component } from '@angular/core';
import { NavController, NavParams ,ToastController,AlertController} from 'ionic-angular';
import * as _ from 'lodash'
import { TeamsApi } from '../../providers/teams-api/teams-api';
import { UserSettingsProvider } from '../../providers/user-settings/user-settings';
import { GamePage } from '../game/game';
import * as moment from 'moment';

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  public allGames: any[];
  public dateFilter: string;
  public games: any[];
  public isFollowing = false;
  public team: any;
  public teamStanding: any = {};
  public tourneyData: any;
  public useDateFilter = false;

  constructor(private alertController: AlertController,public navCtrl: NavController, public navParams: NavParams,private eliteApi : TeamsApi
  ,private toastController: ToastController,private userSettings : UserSettingsProvider ) {
    this.team = this.navParams.data;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
    this.tourneyData = this.eliteApi.getCurrentTourney();
    console.log(this.tourneyData);
    this.games = _.chain(this.tourneyData.games)
                  .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
                                    .map(g => {let isTeam1 = (g.team1Id === this.team.id);

                                    let opponentName = isTeam1 ? g.team2 : g.team1;

                                    let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);

                                    return {

                                              gameId: g.id,

                                              opponent: opponentName,

                                              time: Date.parse(g.time),

                                              location: g.location,

                                              locationUrl: g.locationUrl,

                                              scoreDisplay: scoreDisplay,

                                              homeAway: (isTeam1 ? "vs." : "at")

                                          };

                                          })

                                  .value();
                                  this.allGames = this.games;
                                  //debugger;
                                  this.teamStanding = _.find(this.tourneyData.standings, { 'teamId': this.team.id });
                                      this.userSettings.isFavoriteTeam(this.team.id).then(value => this.isFollowing = value);
                    
  }


    getScoreDisplay(isTeam1, team1Score, team2Score) {

              if (team1Score && team2Score) {

                          var teamScore = (isTeam1 ? team1Score : team2Score);

                                      var opponentScore = (isTeam1 ? team2Score : team1Score);

                                                  var winIndicator = teamScore > opponentScore ? "W: " : "L: ";

                                                              return winIndicator + teamScore + "-" + opponentScore;

                                                                      }

                                                                              else {

                                                                                          return "";

                                                                                                  }

                                                                                                      }

                                                                                                        

  goHome()
  {
    this.navCtrl.parent.parent.popToRoot();
  }

  getScoreWorL(game){
    return game.scoreDisplay ? game.scoreDisplay[0] : '';
  } 

    dateChanged(){
    if (this.useDateFilter) {
      this.games = _.filter(this.allGames, g => moment(g.time).isSame(this.dateFilter, 'day'));
    } else {
      this.games = this.allGames;
    } 
  }
  toggleFollow(){
    if (this.isFollowing) {
      let confirm = this.alertController.create({
        title: 'Unfollow?',
        message: 'Are you sure you want to unfollow?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.isFollowing = false;
              this.userSettings.unfavoriteTeam(this.team);

              let toast = this.toastController.create({
                message: 'You have unfollowed this team.',
                duration: 2000,
                position: 'bottom'
              });
              toast.present(); 
            }
          },
          { text: 'No' }
        ]
      });
      confirm.present();
    } else {
      this.isFollowing = true;
      this.userSettings.favoriteTeam(
        this.team, 
        this.tourneyData.tournament.id, 
        this.tourneyData.tournament.name); 

    }
  } 

  getScoreDisplayBadgeClass(game){
    return game.scoreDisplay.indexOf('W:') === 0 ? 'badge-primary' : 'badge-danger';
  } 


    gameClicked($event, game){

          let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId);

              this.navCtrl.parent.parent.push(GamePage, sourceGame);

                }


                  refreshAll(refresher){
    this.eliteApi.refreshCurrentTourney().subscribe(() => {
      refresher.complete();
      this.ionViewDidLoad();
    });
  } 
    }


