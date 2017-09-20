import angular from 'angular'

import '../../api'

import {fetchLeaguesEffect} from './fetchLeagues'

const effectsModule = angular.module('effects', [
  'api'
])

effectsModule.factory('effects', [
  'api',
  function(api) {
    return [
      fetchLeaguesEffect(api),
    ]
  }
])
