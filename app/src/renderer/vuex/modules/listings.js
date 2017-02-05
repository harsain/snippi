import * as types from '../mutation-types'

// initial state
const state = {
  snippets: [],
  activeSnippet: {}
}

const getters = {
  allSnippets: state => state.snippets,
  activeSnippet: state => state.activeSnippet
}

const actions = {
  getAllSnippets ({ commit }) {
    let snippets = {'id': 1212, 'description': 'test'}
    commit(types.SET_SNIPPETS, {snippets})
  }
}

const mutations = {
  [types.GET_SNIPPET] (state) {
    console.log('test')
  },
  [types.ADD_SNIPPET] (state) {
    state.main++
  },
  [types.SET_SNIPPETS] (state, snippets) {
    state.snippets = snippets
  },
  [types.SET_ACTIVE_SNIPPET] (state, {snippet}) {
    console.log(snippet)
    state.activeSnippet = snippet
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
