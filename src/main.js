// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter('capitalize', function(value){
  if(!value) return ''
  const length = value.length - 1
  value = value.toString()
  return value.slice(0,length) + value.charAt(length).toUpperCase()
})
