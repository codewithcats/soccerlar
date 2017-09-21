import R from 'ramda'

export const selectorsFactory = [
  function() {
    return {
      leaguesAsc(state) {
        const slugs = state.sortedLeagues.asc
        const leagues = state['slug<->league']
        return R.map(
          slug => leagues[slug],
          slugs
        )
      },
      leaguesDesc(state) {
        const slugs = state.sortedLeagues.desc
        const leagues = state['slug<->league']
        return R.map(
          slug => leagues[slug],
          slugs
        )
      }
    }
  }
]
