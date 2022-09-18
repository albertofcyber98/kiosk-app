import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'

Vue.use(Vuex)

import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    example,
    state,
    mutations,
    actions
  })

  return Store
}
