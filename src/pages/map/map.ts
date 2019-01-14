import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamsApi } from '../../providers/teams-api/teams-api';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var window: any;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  public map : any = {};

  constructor(private teamApi : TeamsApi, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let games = this.navParams.data;
    let tourneyData = this.teamApi.getCurrentTourney();
    let location = tourneyData.locations[games.locationId];

    this.map = {
      lat: location.latitude,
      lng: location.longitude,
      zoom: 12,
      markerLabel: games.location 
    };

    console.log(this.map);
  }

  getDirections() { 
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`; 
  }

}
