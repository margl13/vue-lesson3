import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-http-lesson-6b288.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', localStorage.getItem('token'));
  next()
})

Vue.http.interceptors.push((response, next) => {
  if (response.errors) {
    if (response.error === 401) {
      response.headers.set('Authorization',localStorage.getItem('refresh') )
      localStorage.clear()
    }
  }

  next()
})
