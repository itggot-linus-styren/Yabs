import Vue from 'vue';
import {VuexModule, Module, getModule, Action, Mutation} from '@bartvanvliet/vuex-module-decorators';
import store from '../new';
import LoansAPI from '../../api/loans';

export interface Loan {
  book: object;
  book_id: number;
  created_at: string;
  expiration_date: string;
  id: number;
  lent_by: object;
  lent_by_id: number;
  loaned_by: object;
  loaned_by_id: number;
  returned_at: string|null;
  updated_at: string;
}
export interface LoanObject {[id: number]: Loan; }

export interface LoanState {
  loans: LoanObject;
  failure: any;
}

@Module({dynamic: true, namespaced: true, name: 'LoansModule', store})
class LoansModule extends VuexModule {
  private loanState: LoanState = {loans: {}, failure: null};

  get all() {
    return this.loanState.loans;
  }

  @Action({rawError: true})
  public fetchAll() {
    return new Promise((resolve, reject) => {
      LoansAPI.all()
        .then((response: any) => {
          response.forEach((loan: any) => this.setLoan(loan));
          resolve();
        })
        .catch((error: any) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public create(request: any) {
    return new Promise((resolve, reject) => {
      LoansAPI.create(request)
        .then((response: any) => {
          this.setLoan(response);
          resolve(response);
        })
        .catch((error: any) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public update(request: any) {
    return new Promise((resolve, reject) => {
      LoansAPI.update(request)
        .then((response: any) => {
          this.setLoan(response);
          resolve(response);
        })
        .catch((error: any) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public delete(request: any) {
    return new Promise((resolve, reject) => {
      LoansAPI.delete(request)
        .then((response: any) => {
          this.removeLoan(response);
          resolve(response);
        })
        .catch((error: any) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Mutation
  private setLoan(payload: any) {
    Vue.set(this.loanState.loans, payload.id, payload);
  }

  @Mutation
  private setFailure(payload: any) {
    this.loanState.failure = payload;
  }

  @Mutation
  private removeLoan(loanId: string) {
    Vue.delete(this.loanState.loans, loanId);
  }
}

export default getModule(LoansModule);
