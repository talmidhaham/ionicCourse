import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/Rx';



/*
  Generated class for the TeamsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamsApi {

  private baseUrl = "https://teams-83cb1.firebaseio.com"
  currentTourney: any = {};
    private tourneyData = {};

    constructor(private http: Http) { }

    getTournaments(){
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()));
        });
    }

    getTournamentData(tourneyId, forceRefresh: boolean = false) : Observable<any> {
        if (!forceRefresh && this.tourneyData[tourneyId]) {
            this.currentTourney = this.tourneyData[tourneyId];
            console.log('**no need to make HTTP call, just return the data'); 
            return Observable.of(this.currentTourney);
        }

        // don't have data yet
        console.log('**about to make HTTP call');
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
            .map(response => {
                this.tourneyData[tourneyId] = response.json();
                this.currentTourney = this.tourneyData[tourneyId];
                return this.currentTourney;
            });
    }

    getCurrentTourney(){
        return this.currentTourney;
    }

    refreshCurrentTourney(){
        return this.getTournamentData(this.currentTourney.tournament.id, true); 
    }
}