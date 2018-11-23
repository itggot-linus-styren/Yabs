import Vue from 'vue';
import BooksAPI from '../../api/books';

interface BookState {
  books: {},
  failure: any
}

// initial state
const state : BookState = {books: {}, failure: null}

// getters
const getters = {
  all: (state : BookState) => {
    return state.books;
  }
}

// actions
const actions = {
  all (context : any, request : any) {
    BooksAPI.all()
             .then((response : any) => response.forEach((book : any) => context.commit('setBook', book)))
             .then((error : any) => context.commit('failure', error));
  },
  create (context : any, request : any) {
    BooksAPI.create(request)
             .then((response : any) => context.commit('setBook', response))
             .catch((error : any) => context.commit('failure', error));
  },
  update (context : any, request : any) {
    BooksAPI.update(request)
             .then((response : any) => context.commit('setBook', response))
             .catch((error : any) => context.commit('failure', error));
  },
  delete (context : any, request : any) {
    BooksAPI.delete(request)
             .then((response : any) => context.commit('removeBook', response))
             .catch((error : any) => context.commit('failure', error));
  }
}

// mutations
const mutations = {
  setBook (state : BookState, payload : any) {
    Vue.set(state.books, payload.id, payload);
  },
  removeBook (state : BookState, bookId : string) {
    Vue.delete(state.books, bookId);
  },
  failure (state : BookState, payload : any) {
    state.failure = payload;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
