import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';

Vue.use(Vuetify);

new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
