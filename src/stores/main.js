import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    // Here we directly put the data after extracting it in utilities 
    // we can instead fetch it as our backend data
    data : []
  },
  mutations: {

  },
  actions: {

  }
})
