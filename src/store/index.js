import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// ログイン状態Authと、タスクの状態BoardをVuexで一元管理する
const state = {
  auth: {
    token: null,
    userId: null
  },
  board: {
    lists: [] // TaskListを空配列で初期化
  }
}

export default new Vuex.Store({
  state, // 定義したstateを`state`オプションに指定
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
