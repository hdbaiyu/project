import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...1', done: true },
      { id: 2, text: '...2', done: false }
    ]
  }

})
