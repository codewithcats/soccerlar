import R from 'ramda'
import {createSelector} from 'reselect'

export const selectorsFactory = [
  function() {
    const getSortedLeagues = state => state.sortedLeagues
    const getSlugToLeague = state => state['slug<->league']
    const getLeaguesSortingDirection = state => state.sorting
    const getLeagues = createSelector(
      [getSortedLeagues, getLeaguesSortingDirection, getSlugToLeague],
      (sortedLeagues, direction, slugToLeague) => {
        return R.map(slug => slugToLeague[slug], sortedLeagues[direction])
      }
    )
    return {
      leagues: getLeagues,
    }
  }
]
