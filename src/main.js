import Vue from 'vue'
import App from './App.vue'
import Card1 from './components/Card1.vue'

Vue.component('card1', Card1);


new Vue({
  el: '#app',
  render: h => h(App)
})
