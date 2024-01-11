import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 'cn',
    isMobile: false,
  },
  mutations: {
    setLang (state, string) {
      state.lang = string;
    },
    setIsMobile (state, flag) {
      state.isMobile = flag;
    }
  },
  actions: {
  },
  modules: {
  },
  /* vuex数据持久化配置 */
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies  默认: localStorage
      storage: window.sessionStorage,
      reducer (state) {
        // 要存储的数据
        return {
          lang: state.lang,
          isMobile: state.isMobile
        };
      }
    })
  ]
})
