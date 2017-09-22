import {bindActionCreators} from 'redux'

export const actionsFactory = [
  'store',
  function(store) {
    return bindActionCreators({

      fetchLeagues: () => ({
        type: 'FETCH_LEAGUES'
      }),

      leaguesOrder: (direction) => ({
        type: 'LEAGUES_ORDER',
        payload: {
          direction
        }
      })
      
    }, store.dispatch)
  }
]
