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
      template: `
      <section ng-controller="leagueListController">
        <div class="panel">
          <p class="panel-heading">
            Leagues
          </p>
          <a class="panel-block"
            ng-repeat="league in leagues track by league.identifier"
          >
            {{league.name}}
          </a>
        </div>
      </section>
      `
    }

    $stateProvider.state(leagues)
    $urlRouterProvider.otherwise('/leagues')
  }
])

soccerlarModule.controller('leagueListController', [
  '$http',
  '$scope',
  function($http, $scope) {
    console.debug('[leagueListController] started')
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
