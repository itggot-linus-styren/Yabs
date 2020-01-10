import { User } from '@/types';
import APIRequest from './APIRequest';

export default class UsersAPI extends APIRequest {

  static all(): Promise<User[]> {
    return new Promise((res, rej) => {
      this.Get<User[]>('v1/users')
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static get(id: string): Promise<User> {
    return new Promise((res, rej) => {
      this.Get<User>(`v1/users/${id}`)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static updateImage(request: FormData): Promise<User> {
    return new Promise((res, rej) => {
      this.Patch<User>(`v1/users/${request.get('uid')}`, request, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      })
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static updateUser(request: User): Promise<User> {
    return new Promise((res, rej) => {
      this.Patch<User>(`v1/users/${request['uid']}`, request)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static async signIn(idToken: string): Promise<User> { 
    return new Promise((res, rej) => {
      this.Post<User>('v1/auth', {id_token: idToken}) //eslint-disable-line camelcase
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static signOut(): Promise<User> {
    return new Promise((res, rej) => {
      this.Delete<User>('v1/auth/0')
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }
}
