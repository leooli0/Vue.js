require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue';
Vue.component('vc-users', require('./components/vcUsers.vue').default);
const app = new Vue({
    el: '.container'
});