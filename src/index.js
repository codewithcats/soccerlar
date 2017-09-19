import 'bulma/css/bulma.css'
import angular from 'angular'

const soccerlarModule = angular.module('soccerlar', [])

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
