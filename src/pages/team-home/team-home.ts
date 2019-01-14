import { MyTeamsMyTeamsComponent } from './../my-teams/my-teams-my-teams';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { Standing2Page } from '../standing2/standing2'

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {

  public team : any = {};

  public teamDetailTab = TeamDetailPage

  public standingTab = Standing2Page

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log(this.team);
  }


  goHome()
  {
    //this.navCtrl.push(MyTeamsMyTeamsComponent)
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

}
