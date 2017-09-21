import R from 'ramda'
import {createSelector} from 'reselect'

export const selectorsFactory = [
  function() {
    const getSortedLeagues = state => state.sortedLeagues
    const getSlugToLeague = state => state['slug<->league']
    const getLeaguesAsc = createSelector(
      [getSortedLeagues, getSlugToLeague],
      (sortedLeagues, slugToLeague) => {
        return R.map(slug => slugToLeague[slug], sortedLeagues.asc)
      }
    )
    const getLeaguesDesc = createSelector(
      [getSortedLeagues, getSlugToLeague],
      (sortedLeagues, slugToLeague) => {
        return R.map(slug => slugToLeague[slug], sortedLeagues.desc)
      }
    )
    return {
      leaguesAsc: getLeaguesAsc,
      leaguesDesc: getLeaguesDesc,
    }
  }
]
