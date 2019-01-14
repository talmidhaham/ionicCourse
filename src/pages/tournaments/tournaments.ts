import { TeamsApi } from './../../providers/teams-api/teams-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicApp, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

public tournaments ; any;


  constructor(private eliteApi :TeamsApi,public navCtrl: NavController, public navParams: NavParams
    ,private loadindController : LoadingController)
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');

    let loader = this.loadindController.create({
      content: 'we are loading the data ...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => this.tournaments = data);
      loader.dismiss();

    });

    
  }


  itemTapped($event,item)
  {
    this.navCtrl.push(TeamsPage,item);
  }


  ionViewCanEnter(){
   
  }

  ionViewCanLeave(){
   
  }

  ionViewDidEnter(){
   
  }

  ionViewDidLeave(){
   
  }

  ionViewWillEnter(){
   
  }

  ionViewWillLeave(){
   
  }

  ionViewWillUnload(){
   
  }
}