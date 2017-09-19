import angular from 'angular'

const soccerlarModule = angular.module('soccerlar', [])

soccerlarModule.controller('leagueListController', [
  '$http',
  function($http) {
    console.debug('[leagueListController] started')
  }
])
