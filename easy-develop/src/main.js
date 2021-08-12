import Vue from 'vue'
import App from './App.vue'
import {canonical} from "./components/canonical/index"
Vue.use(canonical)
new Vue({
  el: '#app',
  render: h => h(App)
})
