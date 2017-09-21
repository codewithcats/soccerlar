export const selectorsFactory = [
  function() {
    return {
      leaguesAsc(state) {
        return state.sortedLeagues.asc
      },
      leaguesDesc(state) {
        return state.sortedLeagues.desc
      }
    }
  }
]
