export default {
  // appModules
  namespaced: true,
  state: {},
  mutations: {
    // 清空sessionStorage
    "DESTROYED_SESSION_STORAGE": () => {
      sessionStorage.clear()
    },
    // 清空localStorage
    "DESTROYED_LOCAL_STORAGE" :() => {
      localStorage.clear()
    }
  },
  actions: {
    destroyedSessionStorage({ commit }) {
      commit('DESTROYED_SESSION_STORAGE')
    },
    destroyedLocalStorage({ commit }) {
      commit('DESTROYED_LOCAL_STORAGE')
    }
  },
  getters: {
  }
}

