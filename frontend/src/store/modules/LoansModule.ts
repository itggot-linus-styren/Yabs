import Vue from 'vue';
import {VuexModule, Module, getModule, Action, Mutation} from 'vuex-module-decorators';
import store from '..';
import LoansAPI from '../../api/loans';
import convertList from '@/helpers/convertArrayToNested';
import convertNested from '@/helpers/convertNestedToArray';

export interface Loan {
  book: object;
  book_id: number; //eslint-disable-line camelcase
  created_at: string; //eslint-disable-line camelcase
  expiration_date: string; //eslint-disable-line camelcase
  id: number;
  lent_by: object; //eslint-disable-line camelcase
  lent_by_id: number; //eslint-disable-line camelcase
  loaned_by: object; //eslint-disable-line camelcase
  loaned_by_id: number; //eslint-disable-line camelcase
  returned_at: string|null; //eslint-disable-line camelcase
  updated_at: string; //eslint-disable-line camelcase
}

export interface LoanForm {
  id?: number;
  book_id: number; //eslint-disable-line camelcase
  lent_by_id: number; //eslint-disable-line camelcase
  loaned_by_id: number; //eslint-disable-line camelcase
}

export interface LoanCollection {[id: number]: Loan; }

@Module({dynamic: true, namespaced: true, name: 'LoansModule', store})
class LoansModule extends VuexModule {
  private _loans: LoanCollection = {};
  private _failure: object = {};

  get all(): LoanCollection {
    return this._loans;
  }

  get allAsArray(): Loan[] {
    return convertNested(this._loans);
  }

  @Action({rawError: true})
  public fetchAll(): Promise<LoanCollection> {
    return new Promise((resolve, reject) => {
      LoansAPI.all()
        .then((response: Loan[]) => {
          this.convertLoanList(response);
          resolve(this._loans);
        })
        .catch((error: object) => {
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public create(request: LoanForm): Promise<Loan> {
    return new Promise((resolve, reject) => {
      LoansAPI.create(request)
        .then((response: Loan) => {
          this.setLoan(response);
          resolve(response);
        })
        .catch((error: object) => {
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public update(request: LoanForm): Promise<Loan> {
    return new Promise((resolve, reject) => {
      LoansAPI.update(request)
        .then((response: Loan) => {
          this.setLoan(response);
          resolve(response);
        })
        .catch((error: object) => {
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public delete(request: Loan): Promise<number> {
    return new Promise((resolve, reject) => {
      LoansAPI.delete(request)
        .then((response: number) => {
          this.removeLoan(response);
          resolve(response);
        })
        .catch((error: object) => {
          reject(error);
        });
    });
  }

  @Mutation
  private setLoan(payload: Loan):void {
    Vue.set(this._loans, payload.id, payload);
  }

  @Mutation
  private removeLoan(loanId: number): void {
    Vue.delete(this._loans, loanId);
  }

  @Mutation
  private convertLoanList(payload: Loan[]): void {
    const list = convertList(payload, 'id');
    this._loans = list;
  }

  @Mutation
  private setFailure(payload: object): void {
    //should enable e2e CI pipeline
  }
}

export default getModule(LoansModule);
