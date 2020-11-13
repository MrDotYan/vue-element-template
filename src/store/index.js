import Vue from 'vue'
import Vuex from 'vuex'
import layoutModules from './modules/layoutModules';
import appModules from './modules/appModules';
Vue.use(Vuex)

const setStrogeFun = store => {
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    window.sessionStorage.setItem('state', JSON.stringify(state))
  })
}


export default new Vuex.Store({
  // 模块
  modules: {
    // 这里其实是这个样的 {"layoutModules":layoutModules}
    // 这就解释了为什么在mapState以及其他操作时传入的第一个参数是模块的名字
    // 但是，一定要记住namespaced一定要写
    layoutModules,
    appModules
  },
  plugins: [setStrogeFun]
})
