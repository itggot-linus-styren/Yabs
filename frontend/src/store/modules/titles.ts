import Vue from 'vue';

interface TitleState {
  titles: {}
}

// initial state
const state : TitleState = {titles: []}

// getters
const getters = {
  all: (state : TitleState) => {
    return state.titles;
  }
}

// actions
const actions = {
  create (context : any, title : any) {
    context.commit('createTitle', title);
  },
  update (context : any, title : any) {
    context.commit('updateTitle', title);
  }
}

// mutations
const mutations = {
  createTitle (state : TitleState, payload : any) {
    Vue.set(state.titles, '0', {name: "goodies"});
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
