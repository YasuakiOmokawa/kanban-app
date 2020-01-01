// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto' // プロミスをポリフィル（機能を満たせないブラウザだった場合、機能を補完すること)
import App from './App'
import router from './router'
import store from './store' // Vuexのストアインスタンスをサポート

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // インポートしたストアインスタンスを`store`オプションとして指定
  components: { App },
  template: '<App/>'
})
