import angular from 'angular'

import {storeFactory} from './store'
import {selectorsFactory} from './selectors'
import {connectFactory} from './connect'
import {bindFactory} from './bind'

const storeModule = angular.module('store', [])

storeModule.factory('store', storeFactory)
storeModule.factory('selectors', selectorsFactory)
storeModule.factory('connect', connectFactory)
storeModule.factory('bind', bindFactory)
