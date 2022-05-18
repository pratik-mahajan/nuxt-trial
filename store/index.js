import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export const state = () => ({
  tasks: [],
})

export const mutations = {
  initializeState(state) {
    if (localStorage.getItem('state')) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('state')))
      )
    }
  },
  addTask(state, task) {
    state.tasks = [...state.tasks, { content: task, done: false }]
  },
  removeTask(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  toggleTask(state, task) {
    task.done = !task.done
  },
}

export const plugins = [vuexLocal.plugin]
