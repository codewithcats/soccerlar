import angular from 'angular'

import {storeFactory} from './store'
import {selectorsFactory} from './selectors'

const storeModule = angular.module('store', [])

storeModule.factory('store', storeFactory)
storeModule.factory('selectors', selectorsFactory)
