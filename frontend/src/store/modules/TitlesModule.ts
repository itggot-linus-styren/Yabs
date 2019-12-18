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
import convertList from '@/helpers/convertArrayToNested';
import convertNested from '@/helpers/convertNestedToArray';

export interface Title {
  cost: number;
  created_at: string; //eslint-disable-line camelcase
  id: number;
  isbn: string;
  name: string;
  title_type: string; //eslint-disable-line camelcase
  updated_at: string; //eslint-disable-line camelcase
}

export interface TitleForm {
  id: number;
  name: string;
  cost: string;
  isbn: string;
  title_type: string; //eslint-disable-line camelcase
}

export interface TitleCollection { [id: number]: Title; }

@Module({dynamic: true, namespaced: true, name: 'TitlesModule', store})
class TitlesModule extends VuexModule {
  private _failure: object = {};
  private _titles: TitleCollection = {};

  get all(): TitleCollection {
    return this._titles;
  }

  get allAsArray(): Title[] {
    return convertNested(this._titles);
  }

  @Action({rawError: true})
  public fetchAll(): Promise<TitleCollection> {
    return new Promise((resolve, reject) => {
      TitlesAPI.all()
        .then((response: Title[]) => {
          this.convertTitleList(response);
          resolve();
        })
        .catch((error: object) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public create(request: TitleForm): Promise<Title> {
    return new Promise((resolve, reject) => {
      TitlesAPI.create(request)
        .then((response: Title) => {
          this.setTitle(response);
          resolve(response);
        })
        .catch((error: object) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public update(request: TitleForm): Promise<Title> {
    return new Promise((resolve, reject) => {
      TitlesAPI.update(request)
        .then((response: Title) => {
          this.setTitle(response);
          resolve(response);
        })
        .catch((error: object) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public delete(request: Title): Promise<number> {
    return new Promise((resolve, reject) => {
      TitlesAPI.delete(request)
        .then((response: number) => {
          this.removeTitle(response);
          resolve(response);
        })
        .catch((error: object) => {
          this.setFailure(error);
          reject(error);
        });
    });
  }

  @Mutation
  private setTitle(payload: Title): void {
    Vue.set(this._titles, payload.id, payload);
  }

  @Mutation
  private removeTitle(titleId: number): void {
    Vue.delete(this._titles, titleId);
  }

  @Mutation
  private setFailure(payload: object): void {
    this._failure = payload;
  }

  @Mutation
  private convertTitleList(payload: Title[]): void {
    const list = convertList(payload, 'id');
    this._titles = list;
  }
}

export default getModule(TitlesModule);
