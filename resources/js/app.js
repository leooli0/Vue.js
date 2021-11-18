require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue';
Vue.component('users-title-component', require('./components/usersTitle.vue').default);
const app = new Vue({
    el: '#app'
});