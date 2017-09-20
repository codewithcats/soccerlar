import angular from 'angular'

import {fetchLeaguesEffect} from './fetchLeagues'

const effectsModule = angular.module('effects', [])

effectsModule.factory('effects', [
  function() {
    return [
      fetchLeaguesEffect,
    ]
  }
])
