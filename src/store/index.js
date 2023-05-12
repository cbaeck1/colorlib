// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from "vuex";

import banner from './banner/index';
import blog from './blog/index';
import cart from './cart/index';
import insta from './insta/index';
import product from './product/index';

// Vue.use(Vuex)

export default createStore({
  modules: {
    banner,
    product,
    cart,
    blog,
    insta
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});

