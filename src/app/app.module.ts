import {  HttpModule } from '@angular/http';
import { TeamHomePage } from './../pages/team-home/team-home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AgmCoreModule} from '@agm/core'
import {MyTeamsMyTeamsComponent} from '../pages/my-teams/my-teams-my-teams'
import { TournamentsPage } from '../pages/tournaments/tournaments';
import {GamePage} from '../pages/game/game'
import {TeamDetailPage} from '../pages/team-detail/team-detail'
import {TeamsPage} from '../pages/teams/teams'
import { TeamsApi } from '../providers/teams-api/teams-api';
import { HttpClientModule } from '@angular/common/http';
import { Standing2Page } from '../pages/standing2/standing2'
import { MapPage } from '../pages/map/map'
import { UserSettingsProvider } from '../providers/user-settings/user-settings';


  
@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // ListPage,
    MyTeamsMyTeamsComponent,MapPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage ,Standing2Page , TeamHomePage
  ],
  imports: [HttpModule,AgmCoreModule.forRoot({apiKey: 'AIzaSyCDbKZu8a4TzAdsC3DUn0naWshcpRTbpnY'}),
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,MapPage,
    MyTeamsMyTeamsComponent,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage,Standing2Page , TeamHomePage
    // HomePage,
    // ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeamsApi,
    UserSettingsProvider
  ]
})
export class AppModule {}
