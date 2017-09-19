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
            ng-click="onLeagueClick(league)"
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
          >
            {{season.name}}
          </a>
        </div>
      </section>
      `
    }
    $stateProvider.state(leagueDetail)

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

    $scope.onLeagueClick = (league) => {
      $state.go('leagueDetail', {
        leagueSlug: league.league_slug
      })
    }
  }
])

soccerlarModule.controller('leagueDetailController', [
  '$http',
  '$scope',
  '$stateParams',
  function($http, $scope, $stateParams) {
    const slug = $stateParams.leagueSlug
    $http({
      url: `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${slug}`,
      headers: {
        'X-Mashape-Key': 'ZqAO9XW13qmshFt97YltTFOOGDjhp1dHh00jsnD8ztb0FcWmpG',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      $scope.league = response.data.data.leagues[0]
      return $http({
        url: `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${slug}/seasons`,
        headers: {
          'X-Mashape-Key': 'ZqAO9XW13qmshFt97YltTFOOGDjhp1dHh00jsnD8ztb0FcWmpG',
          'Accept': 'application/json'
        }
      })
    })
    .then(response => {
      console.debug('[leagueDetailController] seasons', response.data)
      $scope.seasons = response.data.data.seasons
    })
  }
])
