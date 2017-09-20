import angular from 'angular'

import {storeFactory} from './store'

const storeModule = angular.module('store', [])

storeModule.factory('store', storeFactory)
