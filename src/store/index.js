import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editMode: false,
    todos: ['Sample To-do'],
    completedTodos: ['Completed To-do']
  }
})
