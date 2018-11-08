import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)
// console.log(this.$store.state.imgHost);
const state = {
    userInfo: {},
    imgHost: 'http://onlineshoppingmall.xin:8082/'
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});