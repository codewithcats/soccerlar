import angular from 'angular'

import '../effects'

import {storeFactory} from './store'
import {selectorsFactory} from './selectors'
import {connectFactory} from './connect'
import {bindFactory} from './bind'
import {actionsFactory} from './actions'

const storeModule = angular.module('store', [
  'effects'
])

storeModule.factory('store', storeFactory)
storeModule.factory('selectors', selectorsFactory)
storeModule.factory('connect', connectFactory)
storeModule.factory('bind', bindFactory)
storeModule.factory('actions', actionsFactory)
