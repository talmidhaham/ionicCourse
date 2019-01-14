import { Component } from '@angular/core';
import { NavController ,IonicPage,NavParams, LoadingController} from  'ionic-angular' ;
import {TournamentsPage} from '../tournaments/tournaments'
import { TeamsApi } from '../../providers/teams-api/teams-api';
import { TeamHomePage } from '../team-home/team-home';
import { UserSettingsProvider } from '../../providers/user-settings/user-settings';

/**
 * Generated class for the MyTeamsMyTeamsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-teams-my-teams',
  templateUrl: 'my-teams-my-teams.html'
})
export class MyTeamsMyTeamsComponent {

public  favorites = [];
    // public  favorites = [

    //           {

    //                   team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },

    //                       tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',

    //                           tournamentName: 'March Madness Tournament'

    //                            },

    //                                {

    //                                        team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },

    //                                            tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',

    //                                                tournamentName: 'Holiday Hoops Challenge'

    //                                                }

    //                                                ];



      constructor(private loadingController: LoadingController,
        
                private nav: NavController,
                
                        private eliteApi: TeamsApi, private userSetting : UserSettingsProvider){}

        ionViewDidEnter(){
         this.favorites = this.userSetting.getAllFavorites();
        }

      goToTournaments(){

                    this.nav.push(TournamentsPage); 

                        }


                            favoriteTapped($event, favorite){

                                      let loader = this.loadingController.create({

                                                  content: 'Getting data...',

                                                              dismissOnPageChange: true

                                                                      });

                                                                              loader.present();

                                                                                      this.eliteApi.getTournamentData(favorite.tournamentId)

                                                                                                  .subscribe(t => this.nav.push(TeamHomePage, favorite.team));

                                                                                                      }
                            

}
