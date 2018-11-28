import Vue from 'vue';
import UsersAPI from '../../api/users';

interface UserState {
  users: {};
  failure: any;
}

// initial state
const userState: UserState = {users: {}, failure: null};

// getters
const getters = {
  all: (state: UserState) => {
    return state.users;
  },
};

// actions
const actions = {
  all(context: any, request: any) {
    UsersAPI.all()
             .then((response: any) => response.forEach((user: any) => context.commit('setUser', user)))
             .then((error: any) => context.commit('failure', error));
  },
};

// mutations
const mutations = {
  setUser(state: UserState, payload: any) {
    Vue.set(state.users, payload.id, payload);
  },
  failure(state: UserState, payload: any) {
    state.failure = payload;
  },
};

export default {
  namespaced: true,
  userState,
  getters,
  actions,
  mutations,
};
