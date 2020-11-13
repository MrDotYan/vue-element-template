import router from '@/router/router';
// 为了防止程序出错，尽可能的恢复state的状态
// 默认打开的菜单组
const defaultOpeneds = [router[0].groupKey];

const defaultActive = (router[0].children)[0].path;
let defaultState = JSON.stringify({ layoutModules: { defaultOpeneds, defaultActive } });

export default {
  
  /********************************************************
  `namespaced` 命名空间
  标明当前模块，当你访问的时候就可以使用store/index.js里面的模块名称
  ********************************************************/
  namespaced: true,
  // state
  state: JSON.parse(sessionStorage.getItem('state') || defaultState).layoutModules,
  /********************************************************
    mutations 同步方法
    当然你也可以不用这么写
    只要记住commit的第一个参数是mutation函数的函数名就可以了
    注意的是mutations里面的函数不返回任何值
  ********************************************************/
  mutations: {
    /********************************************************
      "TEST": (state, data) => {
        state.tabs = data;
      },
    ********************************************************/

    setDefaultOpeneds: (state, data) => {
      state.defaultOpeneds = data;
    },
    setDefaultActive: (state, data) => {
      state.defaultActive = data;
    },
  },
  // actions 异步方法
  actions: {
  /********************************************************
    getTest({ commit }, data) {
      commit('TEST', data);
      return data;
    }
  ********************************************************/
    
  },
  // getters
  getters: {
  /********************************************************
    getTabs(state) {
      return state.tabs
    }
  ********************************************************/
    
  }
}

