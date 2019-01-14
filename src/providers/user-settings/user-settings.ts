import { Injectable } from '@angular/core';
import { Storage  } from '@ionic/storage'

/*
  Generated class for the UserSettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserSettingsProvider {

  constructor(private storage : Storage ) {
    console.log('Hello UserSettingsProvider Provider');
  }


      favoriteTeam(team, tournamentId, tournamentName){
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(team.id, JSON.stringify(item));
        //this.events.publish('favorites:changed');
    }


        unfavoriteTeam(team){
        this.storage.remove(team.id);
        //this.events.publish('favorites:changed');
    }


        isFavoriteTeam(teamId):Promise<boolean> {
        return this.storage.get(teamId).then(value => value ? true : false);
    }

        getAllFavorites(){
        // let items = [];
        // _.forIn(window.localStorage, (v, k) => {
        //     items.push(JSON.parse(v));
        // });
        // return items.length ? items : null; 
        // return this.storage.query('SELECT * FROM kv').then(data => {
        //     console.log(data);
        //     let results = [];
        //     for (var i = 0; i < data.res.rows.length; i++){
        //         results.push(JSON.parse(data.res.rows.item(i).value));
        //     }
        //     return results;
        // });

        let results = [];
        this.storage.forEach(data => {
          console.log('inside for each :' ,data);
          results.push(JSON.parse(data));
          
        });
        return results;
    }

}
