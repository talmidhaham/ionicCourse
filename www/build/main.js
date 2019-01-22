webpackJsonp([1],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserSettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserSettingsProvider = /** @class */ (function () {
    function UserSettingsProvider(storage) {
        this.storage = storage;
        console.log('Hello UserSettingsProvider Provider');
    }
    UserSettingsProvider.prototype.favoriteTeam = function (team, tournamentId, tournamentName) {
        var item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(team.id, JSON.stringify(item));
        //this.events.publish('favorites:changed');
    };
    UserSettingsProvider.prototype.unfavoriteTeam = function (team) {
        this.storage.remove(team.id);
        //this.events.publish('favorites:changed');
    };
    UserSettingsProvider.prototype.isFavoriteTeam = function (teamId) {
        return this.storage.get(teamId).then(function (value) { return value ? true : false; });
    };
    UserSettingsProvider.prototype.getAllFavorites = function () {
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
        var results = [];
        this.storage.forEach(function (data) {
            console.log('inside for each :', data);
            results.push(JSON.parse(data));
        });
        return results;
    };
    UserSettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], UserSettingsProvider);
    return UserSettingsProvider;
}());

//# sourceMappingURL=user-settings.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tournaments/tournaments.module": [
		838,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_teams_api_teams_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_home_team_home__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamsPage = /** @class */ (function () {
    // teams = [
    //   { id: 1, name: 'HC Elite' },
    //       { id: 2, name: 'Team Takeover' },
    //           { id: 3, name: 'DC Thunder' }
    //             ];
    function TeamsPage(navCtrl, navParams, eliteApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.teams = [];
    }
    TeamsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TeamsPage');
        var seletctedTourney = this.navParams.data;
        this.eliteApi.getTournamentData(seletctedTourney.id).subscribe(function (data) {
            _this.teams = data.teams;
        });
    };
    TeamsPage.prototype.itemTapped = function ($event, team) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__team_home_team_home__["a" /* TeamHomePage */], team);
    };
    TeamsPage.prototype.updateTeams = function () {
        var queryTextLower = this.queryText.toLowerCase();
        var filteredTeams = [];
        __WEBPACK_IMPORTED_MODULE_4_lodash__["forEach"](this.allTeamDivisions, function (td) {
            var teams = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](td.divisionTeams, function (t) { return t.name.toLowerCase().includes(queryTextLower); });
            if (teams.length) {
                filteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams });
            }
        });
        this.teams = filteredTeams;
    };
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/teams/teams.html"*/'<!--\n  Generated template for the TeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="primary">\n\n  <ion-navbar>\n    <ion-title>Teams</ion-title>\n  </ion-navbar>\n    <ion-toolbar>\n        <ion-searchbar placeholder="Search"\n                       [(ngModel)]="queryText"\n                       (ionInput)="updateTeams()">\n        </ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <button *ngFor="let item of teams"  ion-item (click)="itemTapped($event,item)" >\n        {{item.name}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/teams/teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_teams_api_teams_api__["a" /* TeamsApi */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teams_api_teams_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_settings_user_settings__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_game__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamDetailPage = /** @class */ (function () {
    function TeamDetailPage(alertController, navCtrl, navParams, eliteApi, toastController, userSettings) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.toastController = toastController;
        this.userSettings = userSettings;
        this.isFollowing = false;
        this.teamStanding = {};
        this.useDateFilter = false;
        this.team = this.navParams.data;
    }
    TeamDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TeamDetailPage');
        this.tourneyData = this.eliteApi.getCurrentTourney();
        console.log(this.tourneyData);
        this.games = __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](this.tourneyData.games)
            .filter(function (g) { return g.team1Id === _this.team.id || g.team2Id === _this.team.id; })
            .map(function (g) {
            var isTeam1 = (g.team1Id === _this.team.id);
            var opponentName = isTeam1 ? g.team2 : g.team1;
            var scoreDisplay = _this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
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
        this.teamStanding = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.tourneyData.standings, { 'teamId': this.team.id });
        this.userSettings.isFavoriteTeam(this.team.id).then(function (value) { return _this.isFollowing = value; });
    };
    TeamDetailPage.prototype.getScoreDisplay = function (isTeam1, team1Score, team2Score) {
        if (team1Score && team2Score) {
            var teamScore = (isTeam1 ? team1Score : team2Score);
            var opponentScore = (isTeam1 ? team2Score : team1Score);
            var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
            return winIndicator + teamScore + "-" + opponentScore;
        }
        else {
            return "";
        }
    };
    TeamDetailPage.prototype.goHome = function () {
        this.navCtrl.parent.parent.popToRoot();
    };
    TeamDetailPage.prototype.getScoreWorL = function (game) {
        return game.scoreDisplay ? game.scoreDisplay[0] : '';
    };
    TeamDetailPage.prototype.dateChanged = function () {
        var _this = this;
        if (this.useDateFilter) {
            this.games = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.allGames, function (g) { return __WEBPACK_IMPORTED_MODULE_6_moment__(g.time).isSame(_this.dateFilter, 'day'); });
        }
        else {
            this.games = this.allGames;
        }
    };
    TeamDetailPage.prototype.toggleFollow = function () {
        var _this = this;
        if (this.isFollowing) {
            var confirm_1 = this.alertController.create({
                title: 'Unfollow?',
                message: 'Are you sure you want to unfollow?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.isFollowing = false;
                            _this.userSettings.unfavoriteTeam(_this.team);
                            var toast = _this.toastController.create({
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
            confirm_1.present();
        }
        else {
            this.isFollowing = true;
            this.userSettings.favoriteTeam(this.team, this.tourneyData.tournament.id, this.tourneyData.tournament.name);
        }
    };
    TeamDetailPage.prototype.getScoreDisplayBadgeClass = function (game) {
        return game.scoreDisplay.indexOf('W:') === 0 ? 'badge-primary' : 'badge-danger';
    };
    TeamDetailPage.prototype.gameClicked = function ($event, game) {
        var sourceGame = this.tourneyData.games.find(function (g) { return g.id === game.gameId; });
        this.navCtrl.parent.parent.push(__WEBPACK_IMPORTED_MODULE_5__game_game__["a" /* GamePage */], sourceGame);
    };
    TeamDetailPage.prototype.refreshAll = function (refresher) {
        var _this = this;
        this.eliteApi.refreshCurrentTourney().subscribe(function () {
            refresher.complete();
            _this.ionViewDidLoad();
        });
    };
    TeamDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-detail',template:/*ion-inline-start:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/team-detail/team-detail.html"*/'<!--\n  Generated template for the TeamDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>TeamDetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="refreshAll($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card>\n        <ion-card-content>\n            <ion-row>\n                <ion-col width-50>\n                    <h2>Record: {{teamStanding.wins}}-{{teamStanding.losses}}</h2>\n                    <p>Coach: {{team.coach}}</p>\n                </ion-col>\n                <ion-col width-50 text-right>\n                    <button outline (click)="toggleFollow()" *ngIf="!isFollowing">\n                        <ion-icon name="star"></ion-icon>\n                        Add Favorite\n                    </button>\n                    <button (click)="toggleFollow()" *ngIf="isFollowing">\n                        <ion-icon name="star"></ion-icon>\n                    </button>\n                </ion-col>\n            </ion-row>\n            <ion-item>\n                <ion-label>Date Filter:</ion-label>\n                <ion-toggle [(ngModel)]="useDateFilter" (ionChange)="dateChanged()"></ion-toggle>\n                <ion-datetime displayFormat="M/D/YYYY" pickerFormat="M/D/YYYY"\n                    [(ngModel)]="dateFilter" (ionChange)="dateChanged()"\n                    [(disabled)]="!useDateFilter"></ion-datetime>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n\n  <ion-list>\n    <ion-item *ngFor="let game of games" (click)="gameClicked($event, game)">\n        <ion-row>\n            <ion-col width-20>\n                <p>{{game.time | date:\'M/d/yy\'}}</p>\n                <p>{{game.time | date:\'shortTime\'}}</p>\n            </ion-col>\n            <ion-col width-60>\n                <p>{{game.homeAway}} {{game.opponent}}</p>\n                <p>{{game.location}}</p>\n            </ion-col>\n            <ion-col width-20>\n                <h4>{{game.scoreDisplay}}</h4>\n                <ion-badge [class]="getScoreDisplayBadgeClass(game)">{{getScoreWorL(game)}}</ion-badge>\n            </ion-col>\n        </ion-row>\n    </ion-item>\n</ion-list>    \n</ion-content> \n'/*ion-inline-end:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/team-detail/team-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_teams_api_teams_api__["a" /* TeamsApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_settings_user_settings__["a" /* UserSettingsProvider */]])
    ], TeamDetailPage);
    return TeamDetailPage;
}());

//# sourceMappingURL=team-detail.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_teams_api_teams_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_home_team_home__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams, eliteApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.game = {};
    }
    GamePage.prototype.ionViewDidLoad = function () {
        this.game = this.navParams.data;
        this.game.gameTime = Date.parse(this.game.time);
        console.log('ionViewDidLoad GamePage');
    };
    GamePage.prototype.teamTapped = function (teamId) {
        var tourneyData = this.eliteApi.getCurrentTourney();
        var team = tourneyData.teams.find(function (t) { return t.id === teamId; });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__team_home_team_home__["a" /* TeamHomePage */], team);
    };
    GamePage.prototype.goToDirections = function () {
        var tourneyData = this.eliteApi.getCurrentTourney();
        var location = tourneyData.locations[this.game.locationId];
        window.location = "geo:" + location.latitude + "," + location.longitude + ";u=35;";
    };
    GamePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */], this.game);
    };
    GamePage.prototype.isWinner = function (score1, score2) {
        return Number(score1) > Number(score2);
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/game/game.html"*/'<ion-header>\n    <ion-navbar primary>\n        <ion-title>Game</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n        <ion-col width-50 text-center class="divider-col">\n            <button clear full (click)="teamTapped(game.team1Id)">Home</button>\n        </ion-col>\n        <ion-col width-50 text-center>\n            <button clear full (click)="teamTapped(game.team2Id)">Away</button>\n        </ion-col>\n    </ion-row>\n    <ion-row center>\n        <ion-col width-50 text-center class="divider-col" (click)="teamTapped(game.team1Id)">\n            <h4>{{game.team1}}</h4>\n        </ion-col>\n        <ion-col width-50 text-center (click)="teamTapped(game.team2Id)">\n            <h4>{{game.team2}}</h4>\n        </ion-col>\n    </ion-row>\n    <ion-row baseline class="top-bottom-border">\n        <ion-col text-center (click)="teamTapped(game.team1Id)">\n            <h1 [class.primary-color]="isWinner(game.team1Score, game.team2Score)">{{game.team1Score}}</h1>\n        </ion-col>\n        <ion-col text-center>\n            <ion-label>Score</ion-label>\n        </ion-col>\n        <ion-col text-center (click)="teamTapped(game.team2Id)">\n            <h1 [class.primary-color]="isWinner(game.team2Score, game.team1Score)">{{game.team2Score}}</h1>\n        </ion-col>\n    </ion-row>\n\n    <ion-card>\n        <ion-item>\n            <ion-icon name="calendar" item-left></ion-icon>\n            {{game.gameTime | date:\'M/d/yy\'}} {{game.gameTime | date:\'shortTime\'}}\n        </ion-item>\n        <ion-row>\n            <ion-col width-60>\n                <ion-label>{{game.location}}</ion-label>\n            </ion-col>\n            <ion-col width-40 text-right>\n                <button outline (click)="goToMap()">\n                    <ion-icon name="map"></ion-icon>\n                </button>\n                <button outline (click)="goToDirections()">\n                    <ion-icon name="navigate"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/game/game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_teams_api_teams_api__["a" /* TeamsApi */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_api_teams_api__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = /** @class */ (function () {
    function MapPage(teamApi, navParams) {
        this.teamApi = teamApi;
        this.navParams = navParams;
        this.map = {};
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var games = this.navParams.data;
        var tourneyData = this.teamApi.getCurrentTourney();
        var location = tourneyData.locations[games.locationId];
        this.map = {
            lat: location.latitude,
            lng: location.longitude,
            zoom: 12,
            markerLabel: games.location
        };
        console.log(this.map);
    };
    MapPage.prototype.getDirections = function () {
        window.location = "geo:" + this.map.lat + "," + this.map.lng + ";u=35";
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/map/map.html"*/' <ion-header>\n  <ion-navbar primary>\n      <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="map-page">\n  <button fab fab-left fab-bottom class="fab-map" (click)="getDirections()">\n      <ion-icon name="navigate"></ion-icon>\n  </button>\n\n   <agm-map id="map" [latitude]="map.lat" [longitude]="map.lng" [zoom]="map.zoom" >\n       <agm-marker [latitude]="map.lat" [longitude]="map.lng">\n          <agm-info-window>\n              <strong>{{map.markerLabel}}</strong>\n          </agm-info-window>\n      </agm-marker> \n  </agm-map> \n\n</ion-content> '/*ion-inline-end:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_teams_api_teams_api__["a" /* TeamsApi */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Observable } from 'rxjs/Rx';
/*
  Generated class for the TeamsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TeamsApi = /** @class */ (function () {
    function TeamsApi(http) {
        this.http = http;
        this.baseUrl = "https://teams-83cb1.firebaseio.com";
        this.currentTourney = {};
        this.tourneyData = {};
    }
    TeamsApi.prototype.getTournaments = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.baseUrl + "/tournaments.json")
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    TeamsApi.prototype.getTournamentData = function (tourneyId, forceRefresh) {
        var _this = this;
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (!forceRefresh && this.tourneyData[tourneyId]) {
            this.currentTourney = this.tourneyData[tourneyId];
            console.log('**no need to make HTTP call, just return the data');
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(this.currentTourney);
        }
        // don't have data yet
        console.log('**about to make HTTP call');
        return this.http.get(this.baseUrl + "/tournaments-data/" + tourneyId + ".json")
            .map(function (response) {
            _this.tourneyData[tourneyId] = response.json();
            _this.currentTourney = _this.tourneyData[tourneyId];
            return _this.currentTourney;
        });
    };
    TeamsApi.prototype.getCurrentTourney = function () {
        return this.currentTourney;
    };
    TeamsApi.prototype.refreshCurrentTourney = function () {
        return this.getTournamentData(this.currentTourney.tournament.id, true);
    };
    TeamsApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TeamsApi);
    return TeamsApi;
}());

//# sourceMappingURL=teams-api.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Standing2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_api_teams_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Standing2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Standing2Page = /** @class */ (function () {
    function Standing2Page(navCtrl, navParams, eliteApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.divisionFilter = 'division';
        console.log('standing2 hello');
    }
    Standing2Page.prototype.ngOnInit = function () {
        this.team = this.navParams.data;
        console.log(this.team);
        var tourneyData = this.eliteApi.getCurrentTourney();
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
    };
    Standing2Page.prototype.ionViewLoaded = function () {
        this.team = this.navParams.data;
        console.log(this.team);
        var tourneyData = this.eliteApi.getCurrentTourney();
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
    };
    Standing2Page.prototype.filterDivision = function () {
        var _this = this;
        if (this.divisionFilter === 'all') {
            this.standings = this.allStandings;
        }
        else {
            this.standings = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.allStandings, function (s) { return s.division === _this.team.division; });
        }
    };
    Standing2Page.prototype.getHeader = function (record, recordIndex, records) {
        if (recordIndex === 0 || record.division !== records[recordIndex - 1].division) {
            return record.division;
        }
        return null;
    };
    Standing2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-standing2',template:/*ion-inline-start:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/standing2/standing2.html"*/'<!--\n  Generated template for the StandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar></ion-navbar>\n\n    <ion-toolbar>\n        <ion-segment secondary [(ngModel)]="divisionFilter" (ionChange)="filterDivision($event)">\n            <ion-segment-button value="division">\n                Division\n            </ion-segment-button>\n            <ion-segment-button value="all">\n                All\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list [virtualScroll]="standings" [approxItemHeight]="\'132px\'" [headerFn]="getHeader">\n\n        <ion-item-divider secondary *virtualHeader="let header">\n            {{header}}\n        </ion-item-divider>\n\n        <ion-item *virtualItem="let team">\n            <ion-row>\n                <ion-col>\n                    <h2 primary>{{team.teamName}}</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <h4>Wins</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>Losses</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>Pct</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>PF</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>PA</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>Diff</h4>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <h4>{{team.wins}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.losses}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.winningPct}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.pointsFor}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.pointsAgainst}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.pointsDiff}}</h4>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n    <!-- <ion-list>\n        <ion-item-group *ngFor="let division of allStandings" color="secondary">\n            \n            <ion-item *ngFor="let team of division.divisionStandings">\n            <ion-row>\n                <ion-col>\n                    <h2 primary>{{team.teamName}}</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <h4>Wins</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>Losses</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>Pct</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>PF</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>PA</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>Diff</h4>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <h4>{{team.wins}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.losses}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.winningPct}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.pointsFor}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.pointsAgainst}}</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>{{team.pointsDiff}}</h4>\n                </ion-col>\n            </ion-row>\n            </ion-item>\n        </ion-item-group>\n    </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/standing2/standing2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_api_teams_api__["a" /* TeamsApi */]])
    ], Standing2Page);
    return Standing2Page;
}());

//# sourceMappingURL=standing2.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsMyTeamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teams_api_teams_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_home_team_home__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_settings_user_settings__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyTeamsMyTeamsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MyTeamsMyTeamsComponent = /** @class */ (function () {
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
    function MyTeamsMyTeamsComponent(loadingController, nav, eliteApi, userSetting) {
        this.loadingController = loadingController;
        this.nav = nav;
        this.eliteApi = eliteApi;
        this.userSetting = userSetting;
        this.favorites = [];
    }
    MyTeamsMyTeamsComponent.prototype.ionViewDidEnter = function () {
        this.favorites = this.userSetting.getAllFavorites();
    };
    MyTeamsMyTeamsComponent.prototype.goToTournaments = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__["a" /* TournamentsPage */]);
    };
    MyTeamsMyTeamsComponent.prototype.favoriteTapped = function ($event, favorite) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this.eliteApi.getTournamentData(favorite.tournamentId)
            .subscribe(function (t) { return _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__team_home_team_home__["a" /* TeamHomePage */], favorite.team); });
    };
    MyTeamsMyTeamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-teams-my-teams',template:/*ion-inline-start:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/my-teams/my-teams-my-teams.html"*/'\n<ion-header>\n    <ion-navbar primary>\n        <button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Elite Schedule</ion-title>\n    </ion-navbar>\n    <ion-toolbar secondary>\n        <ion-title>My Teams</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="!favorites">\n        <ion-card-header class="my-teams-header">No Followed Teams</ion-card-header>\n        <ion-card-content>\n            <p>You are not currently following any teams.</p>\n            <p>First select a tournament, then you can follow teams \n                from their team page.</p>\n            <button full (click)="goToTournaments()">\n                <ion-icon name="search"></ion-icon>\n                Find a Tournament\n            </button>\n        </ion-card-content>\n    </ion-card>\n    \n\n    <ion-card *ngIf="favorites">\n        <ion-list>\n            <ion-list-header class="my-teams-header">Followed Teams</ion-list-header>\n            <button ion-item *ngFor="let item of favorites" (click)="favoriteTapped($event, item)">\n                <ion-icon name="star"></ion-icon>\n                {{item.team.name}}\n                <p>{{item.tournamentName}}</p>\n            </button>\n        </ion-list>\n        <ion-card-content>\n            <p>To follow more teams, select a tournament, \n                then you can follow teams from their team page.</p>    \n            <button full (click)="goToTournaments()">\n                <ion-icon name="search"></ion-icon>\n                Find a Tournament\n            </button>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/my-teams/my-teams-my-teams.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_teams_api_teams_api__["a" /* TeamsApi */], __WEBPACK_IMPORTED_MODULE_5__providers_user_settings_user_settings__["a" /* UserSettingsProvider */]])
    ], MyTeamsMyTeamsComponent);
    return MyTeamsMyTeamsComponent;
}());

//# sourceMappingURL=my-teams-my-teams.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(507);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_team_home_team_home__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_my_teams_my_teams_my_teams__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tournaments_tournaments__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_game_game__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_team_detail_team_detail__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_teams_teams__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_teams_api_teams_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_standing2_standing2__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_map_map__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_settings_user_settings__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                // HomePage,
                // ListPage,
                __WEBPACK_IMPORTED_MODULE_10__pages_my_teams_my_teams_my_teams__["a" /* MyTeamsMyTeamsComponent */], __WEBPACK_IMPORTED_MODULE_18__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_team_detail_team_detail__["a" /* TeamDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tournaments_tournaments__["a" /* TournamentsPage */], __WEBPACK_IMPORTED_MODULE_17__pages_standing2_standing2__["a" /* Standing2Page */], __WEBPACK_IMPORTED_MODULE_1__pages_team_home_team_home__["a" /* TeamHomePage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyCDbKZu8a4TzAdsC3DUn0naWshcpRTbpnY' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/tournaments/tournaments.module#TournamentsPageModule', name: 'TournamentsPage', segment: 'tournaments', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_18__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_my_teams_my_teams_my_teams__["a" /* MyTeamsMyTeamsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_team_detail_team_detail__["a" /* TeamDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tournaments_tournaments__["a" /* TournamentsPage */], __WEBPACK_IMPORTED_MODULE_17__pages_standing2_standing2__["a" /* Standing2Page */], __WEBPACK_IMPORTED_MODULE_1__pages_team_home_team_home__["a" /* TeamHomePage */]
                // HomePage,
                // ListPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_teams_api_teams_api__["a" /* TeamsApi */],
                __WEBPACK_IMPORTED_MODULE_19__providers_user_settings_user_settings__["a" /* UserSettingsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_detail_team_detail__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__standing2_standing2__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamHomePage = /** @class */ (function () {
    function TeamHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.team = {};
        this.teamDetailTab = __WEBPACK_IMPORTED_MODULE_2__team_detail_team_detail__["a" /* TeamDetailPage */];
        this.standingTab = __WEBPACK_IMPORTED_MODULE_3__standing2_standing2__["a" /* Standing2Page */];
        this.team = this.navParams.data;
        console.log(this.team);
    }
    TeamHomePage.prototype.goHome = function () {
        //this.navCtrl.push(MyTeamsMyTeamsComponent)
        this.navCtrl.popToRoot();
    };
    TeamHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamHomePage');
    };
    TeamHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-home',template:/*ion-inline-start:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/team-home/team-home.html"*/'<!--\n  Generated template for the TeamHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> {{ team.name }} </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goHome()">\n        <ion-icon name="home" >\n\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n <ion-tabs selctedIndex="2">\n   <ion-tab tabTitle="Team" [root]="teamDetailTab"  [rootParams]="team"  tabIcon="baketball">\n\n   </ion-tab>\n\n   <!-- <ion-tab tabTitle="Standing" [root]="standingTab" [rootParams]="team" tabIcon="podium">\n     \n  </ion-tab> -->\n  <ion-tab tabTitle="Team" [root]="standingTab" [rootParams]="team"  tabIcon="podium">\n\n    </ion-tab>\n\n </ion-tabs>\n'/*ion-inline-end:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/team-home/team-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TeamHomePage);
    return TeamHomePage;
}());

//# sourceMappingURL=team-home.js.map

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 364,
	"./af.js": 364,
	"./ar": 365,
	"./ar-dz": 366,
	"./ar-dz.js": 366,
	"./ar-kw": 367,
	"./ar-kw.js": 367,
	"./ar-ly": 368,
	"./ar-ly.js": 368,
	"./ar-ma": 369,
	"./ar-ma.js": 369,
	"./ar-sa": 370,
	"./ar-sa.js": 370,
	"./ar-tn": 371,
	"./ar-tn.js": 371,
	"./ar.js": 365,
	"./az": 372,
	"./az.js": 372,
	"./be": 373,
	"./be.js": 373,
	"./bg": 374,
	"./bg.js": 374,
	"./bm": 375,
	"./bm.js": 375,
	"./bn": 376,
	"./bn.js": 376,
	"./bo": 377,
	"./bo.js": 377,
	"./br": 378,
	"./br.js": 378,
	"./bs": 379,
	"./bs.js": 379,
	"./ca": 380,
	"./ca.js": 380,
	"./cs": 381,
	"./cs.js": 381,
	"./cv": 382,
	"./cv.js": 382,
	"./cy": 383,
	"./cy.js": 383,
	"./da": 384,
	"./da.js": 384,
	"./de": 385,
	"./de-at": 386,
	"./de-at.js": 386,
	"./de-ch": 387,
	"./de-ch.js": 387,
	"./de.js": 385,
	"./dv": 388,
	"./dv.js": 388,
	"./el": 389,
	"./el.js": 389,
	"./en-au": 390,
	"./en-au.js": 390,
	"./en-ca": 391,
	"./en-ca.js": 391,
	"./en-gb": 392,
	"./en-gb.js": 392,
	"./en-ie": 393,
	"./en-ie.js": 393,
	"./en-il": 394,
	"./en-il.js": 394,
	"./en-nz": 395,
	"./en-nz.js": 395,
	"./eo": 396,
	"./eo.js": 396,
	"./es": 397,
	"./es-do": 398,
	"./es-do.js": 398,
	"./es-us": 399,
	"./es-us.js": 399,
	"./es.js": 397,
	"./et": 400,
	"./et.js": 400,
	"./eu": 401,
	"./eu.js": 401,
	"./fa": 402,
	"./fa.js": 402,
	"./fi": 403,
	"./fi.js": 403,
	"./fo": 404,
	"./fo.js": 404,
	"./fr": 405,
	"./fr-ca": 406,
	"./fr-ca.js": 406,
	"./fr-ch": 407,
	"./fr-ch.js": 407,
	"./fr.js": 405,
	"./fy": 408,
	"./fy.js": 408,
	"./gd": 409,
	"./gd.js": 409,
	"./gl": 410,
	"./gl.js": 410,
	"./gom-latn": 411,
	"./gom-latn.js": 411,
	"./gu": 412,
	"./gu.js": 412,
	"./he": 413,
	"./he.js": 413,
	"./hi": 414,
	"./hi.js": 414,
	"./hr": 415,
	"./hr.js": 415,
	"./hu": 416,
	"./hu.js": 416,
	"./hy-am": 417,
	"./hy-am.js": 417,
	"./id": 418,
	"./id.js": 418,
	"./is": 419,
	"./is.js": 419,
	"./it": 420,
	"./it.js": 420,
	"./ja": 421,
	"./ja.js": 421,
	"./jv": 422,
	"./jv.js": 422,
	"./ka": 423,
	"./ka.js": 423,
	"./kk": 424,
	"./kk.js": 424,
	"./km": 425,
	"./km.js": 425,
	"./kn": 426,
	"./kn.js": 426,
	"./ko": 427,
	"./ko.js": 427,
	"./ku": 428,
	"./ku.js": 428,
	"./ky": 429,
	"./ky.js": 429,
	"./lb": 430,
	"./lb.js": 430,
	"./lo": 431,
	"./lo.js": 431,
	"./lt": 432,
	"./lt.js": 432,
	"./lv": 433,
	"./lv.js": 433,
	"./me": 434,
	"./me.js": 434,
	"./mi": 435,
	"./mi.js": 435,
	"./mk": 436,
	"./mk.js": 436,
	"./ml": 437,
	"./ml.js": 437,
	"./mn": 438,
	"./mn.js": 438,
	"./mr": 439,
	"./mr.js": 439,
	"./ms": 440,
	"./ms-my": 441,
	"./ms-my.js": 441,
	"./ms.js": 440,
	"./mt": 442,
	"./mt.js": 442,
	"./my": 443,
	"./my.js": 443,
	"./nb": 444,
	"./nb.js": 444,
	"./ne": 445,
	"./ne.js": 445,
	"./nl": 446,
	"./nl-be": 447,
	"./nl-be.js": 447,
	"./nl.js": 446,
	"./nn": 448,
	"./nn.js": 448,
	"./pa-in": 449,
	"./pa-in.js": 449,
	"./pl": 450,
	"./pl.js": 450,
	"./pt": 451,
	"./pt-br": 452,
	"./pt-br.js": 452,
	"./pt.js": 451,
	"./ro": 453,
	"./ro.js": 453,
	"./ru": 454,
	"./ru.js": 454,
	"./sd": 455,
	"./sd.js": 455,
	"./se": 456,
	"./se.js": 456,
	"./si": 457,
	"./si.js": 457,
	"./sk": 458,
	"./sk.js": 458,
	"./sl": 459,
	"./sl.js": 459,
	"./sq": 460,
	"./sq.js": 460,
	"./sr": 461,
	"./sr-cyrl": 462,
	"./sr-cyrl.js": 462,
	"./sr.js": 461,
	"./ss": 463,
	"./ss.js": 463,
	"./sv": 464,
	"./sv.js": 464,
	"./sw": 465,
	"./sw.js": 465,
	"./ta": 466,
	"./ta.js": 466,
	"./te": 467,
	"./te.js": 467,
	"./tet": 468,
	"./tet.js": 468,
	"./tg": 469,
	"./tg.js": 469,
	"./th": 470,
	"./th.js": 470,
	"./tl-ph": 471,
	"./tl-ph.js": 471,
	"./tlh": 472,
	"./tlh.js": 472,
	"./tr": 473,
	"./tr.js": 473,
	"./tzl": 474,
	"./tzl.js": 474,
	"./tzm": 475,
	"./tzm-latn": 476,
	"./tzm-latn.js": 476,
	"./tzm.js": 475,
	"./ug-cn": 477,
	"./ug-cn.js": 477,
	"./uk": 478,
	"./uk.js": 478,
	"./ur": 479,
	"./ur.js": 479,
	"./uz": 480,
	"./uz-latn": 481,
	"./uz-latn.js": 481,
	"./uz.js": 480,
	"./vi": 482,
	"./vi.js": 482,
	"./x-pseudo": 483,
	"./x-pseudo.js": 483,
	"./yo": 484,
	"./yo.js": 484,
	"./zh-cn": 485,
	"./zh-cn.js": 485,
	"./zh-hk": 486,
	"./zh-hk.js": 486,
	"./zh-tw": 487,
	"./zh-tw.js": 487
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 827;

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams_my_teams__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tournaments_tournaments__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams_my_teams__["a" /* MyTeamsMyTeamsComponent */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        // this.pages = [
        //   { title: 'Home', component: HomePage },
        //   { title: 'List', component: ListPage }
        // ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goHome = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams_my_teams__["a" /* MyTeamsMyTeamsComponent */]);
    };
    MyApp.prototype.goToTournaments = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_tournaments_tournaments__["a" /* TournamentsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/talmidhaham/Projects/IONCIS/teams/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Elite Schedule</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n            <ion-list-header>Navigate</ion-list-header>\n                  <button menuClose ion-item (click)="goHome()">Home</button>\n                        <button menuClose ion-item (click)="goToTournaments()">Find a Tournament</button>\n                            </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/talmidhaham/Projects/IONCIS/teams/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_teams_api_teams_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teams_teams__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TournamentsPage = /** @class */ (function () {
    function TournamentsPage(eliteApi, navCtrl, navParams, loadindController) {
        this.eliteApi = eliteApi;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadindController = loadindController;
    }
    TournamentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TournamentsPage');
        var loader = this.loadindController.create({
            content: 'we are loading the data ...'
        });
        loader.present().then(function () {
            _this.eliteApi.getTournaments().then(function (data) { return _this.tournaments = data; });
            loader.dismiss();
        });
    };
    TournamentsPage.prototype.itemTapped = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teams_teams__["a" /* TeamsPage */], item);
    };
    TournamentsPage.prototype.ionViewCanEnter = function () {
    };
    TournamentsPage.prototype.ionViewCanLeave = function () {
    };
    TournamentsPage.prototype.ionViewDidEnter = function () {
    };
    TournamentsPage.prototype.ionViewDidLeave = function () {
    };
    TournamentsPage.prototype.ionViewWillEnter = function () {
    };
    TournamentsPage.prototype.ionViewWillLeave = function () {
    };
    TournamentsPage.prototype.ionViewWillUnload = function () {
    };
    TournamentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tournaments',template:/*ion-inline-start:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/tournaments/tournaments.html"*/'<!--\n  Generated template for the TournamentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <!-- <button  menutoogle ion-button icon-only >\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n\n    <ion-title >Select a tournament</ion-title>\n  </ion-navbar  >\n<!-- <ion-toolbar color="secondary">\n  <ion-title >My Team</ion-title>\n\n</ion-toolbar> -->\n\n\n</ion-header>\n\n\n<!-- <ion-content padding> -->\n    <ion-content >\n    <!-- <button (click)="navBack()">Find a Tournament</button> -->\n\n\n    <ion-list>\n      <button *ngFor="let item of tournaments"  ion-item (click)="itemTapped($event,item)" >\n          {{item.name}}\n      </button>\n\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/talmidhaham/Projects/IONCIS/teams/src/pages/tournaments/tournaments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_teams_api_teams_api__["a" /* TeamsApi */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], TournamentsPage);
    return TournamentsPage;
}());

//# sourceMappingURL=tournaments.js.map

/***/ })

},[502]);
//# sourceMappingURL=main.js.map