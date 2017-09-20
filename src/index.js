import 'bulma/css/bulma.css'
import 'angular-ui-router'
import angular from 'angular'

const soccerlarModule = angular.module('soccerlar', ['ui.router'])

soccerlarModule.config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    const leagues = {
      name: 'leagues',
      url: '/leagues',
      controller: 'leagueListController',
      template: `
      <section name="leagues">
        <div class="panel">
          <p class="panel-heading">
            Leagues
          </p>
          <a class="panel-block"
            ng-repeat="league in leagues track by league.identifier"
            ui-sref="leagueDetail({leagueSlug: league.league_slug})"
          >
            {{league.name}}
          </a>
        </div>
      </section>
      `
    }
    $stateProvider.state(leagues)

    const leagueDetail = {
      name: 'leagueDetail',
      url: '/league/{leagueSlug}',
      controller: 'leagueDetailController',
      template: `
      <section name="league-detail">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <a class="navbar-item" ui-sref="leagues">
            <- Leagues
          </a>
        </nav>
        <h1 class="title is-1">
          {{league.name}}
        </h1>
        <h4 class="subtitle is-4">
          {{league.nation}}
        </h4>
        <div class="panel">
          <p class="panel-heading">
            Seasons
          </p>
          <a class="panel-block"
            ng-repeat="season in seasons track by season.identifier"
            ui-sref="seasonDetail({leagueSlug: league.league_slug, seasonSlug: season.season_slug})"
          >
            {{season.name}}
          </a>
        </div>
      </section>
      `
    }
    $stateProvider.state(leagueDetail)

    const seasonDetail = {
      name: 'seasonDetail',
      url: '/league/{leagueSlug}/season/{seasonSlug}',
      controller: 'seasonDetailController',
      template: `
      <section name="season-detail">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <a class="navbar-item" ui-sref="leagueDetail({leagueSlug: leagueSlug})">
            <- League Detail
          </a>
        </nav>
        <div class="panel">
          <p class="panel-heading">
            Standings
          </p>
          <a class="panel-block"
            ng-repeat="team in standings track by team.identifier"
          >
            {{team.team}}
          </a>
        </div>
      </section>
      `
    }
    $stateProvider.state(seasonDetail)

    $urlRouterProvider.otherwise('/leagues')
  }
])

soccerlarModule.controller('leagueListController', [
  '$http',
  '$scope',
  '$state',
  function($http, $scope, $state) {
    $http({
      url: 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues',
      headers: {
        'X-Mashape-Key': 'ZqAO9XW13qmshFt97YltTFOOGDjhp1dHh00jsnD8ztb0FcWmpG',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      const leagues = response.data.data.leagues
      $scope.leagues = leagues
    })
  }
])

soccerlarModule.controller('leagueDetailController', [
  '$http',
  '$scope',
  '$state',
  function($http, $scope, $state) {
    const leagueSlug = $state.params.leagueSlug
    $http({
      url: `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${leagueSlug}`,
      headers: {
        'X-Mashape-Key': 'ZqAO9XW13qmshFt97YltTFOOGDjhp1dHh00jsnD8ztb0FcWmpG',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      $scope.league = response.data.data.leagues[0]
      return $http({
        url: `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${leagueSlug}/seasons`,
        headers: {
          'X-Mashape-Key': 'ZqAO9XW13qmshFt97YltTFOOGDjhp1dHh00jsnD8ztb0FcWmpG',
          'Accept': 'application/json'
        }
      })
    })
    .then(response => {
      $scope.seasons = response.data.data.seasons
    })
  }
])

soccerlarModule.controller('seasonDetailController', [
  '$http',
  '$scope',
  '$state',
  function($http, $scope, $state) {
    $http({
      url: `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${$state.params.leagueSlug}/seasons/${$state.params.seasonSlug}`,
      headers: {
        'X-Mashape-Key': 'ZqAO9XW13qmshFt97YltTFOOGDjhp1dHh00jsnD8ztb0FcWmpG',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      $scope.leagueSlug = $state.params.leagueSlug
      $scope.standings = response.data.data.standings
      $scope.rounds = response.data.data.rounds
    })
  }
])
