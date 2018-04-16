import * as types from './mutation-types'

const mutations = {
  [types.ORDER_SET_USER](state, user) {
    state.user = user
  }
}

export default mutations
