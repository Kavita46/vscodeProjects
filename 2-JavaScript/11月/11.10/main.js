import axios from 'axios'
Vue.prototype.$axios = axios
if (process.env.NODE_ENV === 'development') {
  require('@/data/apiMock')
}                       