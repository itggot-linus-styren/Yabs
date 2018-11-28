import Vue from 'vue';
import LoansAPI from '../../api/loans';

interface LoanState {
  loans: {};
  failure: any;
}

// initial state
const loanState: LoanState = {loans: {}, failure: null};

// getters
const getters = {
  all: (state: LoanState) => {
    return state.loans;
  },
};

// actions
const actions = {
  all(context: any, request: any) {
    LoansAPI.all()
             .then((response: any) => response.forEach((loan: any) => context.commit('setLoan', loan)))
             .then((error: any) => context.commit('failure', error));
  },
  create(context: any, request: any) {
    LoansAPI.create(request)
             .then((response: any) => context.commit('setLoan', response))
             .catch((error: any) => context.commit('failure', error));
  },
  update(context: any, request: any) {
    LoansAPI.update(request)
             .then((response: any) => context.commit('setLoan', response))
             .catch((error: any) => context.commit('failure', error));
  },
  delete(context: any, request: any) {
    LoansAPI.delete(request)
             .then((response: any) => context.commit('removeLoan', response))
             .catch((error: any) => context.commit('failure', error));
  },
};

// mutations
const mutations = {
  setLoan(state: LoanState, payload: any) {
    Vue.set(state.loans, payload.id, payload);
  },
  removeLoan(state: LoanState, loanId: string) {
    Vue.delete(state.loans, loanId);
  },
  failure(state: LoanState, payload: any) {
    state.failure = payload;
  },
};

export default {
  namespaced: true,
  loanState,
  getters,
  actions,
  mutations,
};
