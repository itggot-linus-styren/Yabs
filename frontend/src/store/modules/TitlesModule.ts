import Vue from 'vue';
import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation,
} from 'vuex-module-decorators';
import store from '..';
import TitlesAPI from '../../api/titles';
import convertList from '../../helpers/convertArrayToNested';

export interface Title {
  cost: number;
  created_at: string;
  id: number;
  isbn: string;
  name: string;
  title_type: string;
  updated_at: string;
}

export interface TitleForm {
  name: string;
  cost: string;
  isbn: string;
  title_type: string;
}

export interface TitleCollection { [id: number]: Title; }

@Module({dynamic: true, namespaced: true, name: 'TitlesModule', store})
class TitlesModule extends VuexModule {
  private _failure: any = null;
  private _titles: TitleCollection = {};

  get all() {
    return this._titles;
  }

  get allAsArray() {
    return Object.keys(this._titles).map( (id) => this._titles[Number(id)]);
  }

  @Action({rawError: true})
  public fetchAll() {
    return new Promise((resolve, reject) => {
      TitlesAPI.all()
        .then((response: any) => {
          this.convertTitleList(response);
          resolve();
        })
        .catch((error: any) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public create(request: TitleForm) {
    return new Promise((resolve, reject) => {
      TitlesAPI.create(request)
        .then((response: any) => {
          this.setTitle(response);
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
      TitlesAPI.update(request)
        .then((response: any) => {
          this.setTitle(response);
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
      TitlesAPI.delete(request)
        .then((response: any) => {
          this.removeTitle(response);
          resolve(response);
        })
        .catch((error: any) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Mutation
  private setTitle(payload: any) {
    Vue.set(this._titles, payload.id, payload);
  }

  @Mutation
  private removeTitle(titleId: string) {
    Vue.delete(this._titles, titleId);
  }

  @Mutation
  private setFailure(payload: any) {
    this._failure = payload;
  }

  @Mutation
  private convertTitleList(payload: Title[]) {
    const list = convertList(payload, 'id');
    this._titles = list;
  }
}

export default getModule(TitlesModule);
