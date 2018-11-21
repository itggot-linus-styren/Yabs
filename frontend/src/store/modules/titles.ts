interface TitleState {
  all: Array<any>
}

// initial state
const state : TitleState = {all: []}

// getters
const getters = {
  all: (state : TitleState) => {
    return state.all;
  }
}

// actions
const actions = {
  create (context : any, title : any) {
    context.commit('createTitle', title);
  }
}

// mutations
const mutations = {
  createTitle (state : TitleState, payload : any) {
    state.all.push(payload);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
