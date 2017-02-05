import * as types from '../mutation-types'

// initial state
const state = {
  activeOption: 'all'
}

const mutations = {
  [types.SET_ACTIVE_OPTION] (state, option) {
    state.activeOption = option
  }
}

const getters = {
  activeOption: state => state.activeOption
}

export default [
  state,
  getters,
  mutations
]
