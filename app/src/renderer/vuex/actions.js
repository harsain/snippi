import * as types from './mutation-types'
// import axios from 'axios'

export const updateActiveSnippet = ({ commit }, snippet) => {
  commit(types.SET_ACTIVE_SNIPPET, {snippet})
}
