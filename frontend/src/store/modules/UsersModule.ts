import Vue from 'vue';
import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation,
} from 'vuex-module-decorators';
import store from '..';
import UsersAPI from '../../api/users';
import convertList from '../../helpers/convertArrayToNested';

export interface User {
  created_at: string;
  email: string;
  google_token: string;
  klass: string;
  name: string;
  photo_path: string;
  role: string;
  uid: number;
  updated_at: string;
}

export interface UserCollection { [uid: number]: User; }

@Module({dynamic: true, namespaced: true, name: 'UsersModule', store})
class UsersModule extends VuexModule {
  private _failure: any = null;
  public _users: UserCollection = {};
  private _currentUser: any = null;

  get currentUserID(): number {
    return this._currentUser;
  }

  get all(): UserCollection {
    return this._users;
  }

  get allAsArray() {
    return Object.keys(this._users).map( (id) => this._users[Number(id)]);
  }

  get currentUser(): User {
    return this._users[this._currentUser];
  }

  @Action({rawError: true})
  public fetchAll(): Promise<object> {
    return new Promise((resolve, reject) => {
      UsersAPI.all()
        .then((response: User[]) => {
          this.convertUserList(response);
          resolve();
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public update(request: any) {
    return new Promise((resolve, reject) => {
      UsersAPI.update(request)
        .then((response: any) => {
          this.setUser(response);
          this.setCurrentUser(response);
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public signIn(request: any) {
    return new Promise((resolve, reject) => {
      UsersAPI.signIn(request)
        .then((response: any) => {
          this.setCurrentUser(response);
          this.fetchAll();
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public signOut(): Promise<object> {
    return new Promise((resolve, reject) => {
      UsersAPI.signOut()
        .then((response: any) => {
          this.setCurrentUser(response);
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  @Mutation
  public setUser(payload: any): void {
    Vue.set(this._users, payload.uid, payload);
  }

  @Mutation
  public setCurrentUser(payload: any): void {
    this._currentUser = payload.uid;
  }

  @Mutation
  public setFailure(payload: any): void {
    // This should fix end to end tests(yarn build)
  }

  @Mutation
  public convertUserList(payload: User[]): void {
    const list = convertList(payload, 'uid');
    this._users = list;
  }
}

export default getModule(UsersModule);
