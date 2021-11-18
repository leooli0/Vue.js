require('./bootstrap');

import Vue from 'vue';

import vcUsers from './components/vcUsers'

new Vue({
    el: '.container',
    components:{
      vcUsers
    }
});