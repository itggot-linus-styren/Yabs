import Vue from 'vue';
import {VuexModule, Module, getModule, Action, Mutation} from 'vuex-module-decorators';
import store from '..';
import { Loan, LoanForm, LoanCollection } from '@/types';
import LoansAPI from '../../services/api/loans';
import convertList from '@/helpers/convertArrayToNested';
import convertNested from '@/helpers/convertNestedToArray';

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
