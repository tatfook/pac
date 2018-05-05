// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Icon, Dropdown, DropdownMenu, DropdownItem, Collapse, CollapseItem, Tooltip, Popover, Dialog, Loading } from 'element-ui'

Vue.config.productionTip = false
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Tooltip)
Vue.use(Popover)
Vue.use(Dialog)
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
