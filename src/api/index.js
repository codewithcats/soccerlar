import angular from 'angular'

import {fetchLeagues} from './fetchLeagues'

const apiModule = angular.module('api', [])

apiModule.factory('api', [
  '$http',
  function($http) {
    return {
      fetchLeagues: fetchLeagues($http),
    }
  }
])
