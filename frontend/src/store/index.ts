import Vue from 'vue';
import titles from './modules/titles';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    titles
  },
  strict: debug
})
