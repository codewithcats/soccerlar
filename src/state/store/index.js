import angular from 'angular'

import {storeFactory} from './store'
import {selectorsFactory} from './selectors'
import {connectFactory} from './connect'

const storeModule = angular.module('store', [])

storeModule.factory('store', storeFactory)
storeModule.factory('selectors', selectorsFactory)
storeModule.factory('connect', connectFactory)
