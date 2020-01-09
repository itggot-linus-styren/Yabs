import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

const baseURL: string = 'http://localhost:3000/api/';
const baseSettings: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

export default class APIRequest {

  private static action<T>(verb: Function, request: string, payload?: any, options?: AxiosRequestConfig): Promise<T> { //eslint-disable-line @typescript-eslint/no-explicit-any
    return new Promise((resolve, reject) => {
      options = Object.assign(baseSettings, options);
      if (verb == axios.get || verb == axios.delete) {
        payload = Object.assign(options, payload);
      }
      verb(baseURL+request, payload, options)
        .then((resp: AxiosResponse) => {
          resolve(resp.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  static Get<T>(request: string, options?: AxiosRequestConfig): Promise<T> { //eslint-disable-line @typescript-eslint/no-explicit-any
    return new Promise((res, rej) => {
      this.action<T>(axios.get, request, {}, options)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static Post<T>(request: string, payload: any, options?: AxiosRequestConfig): Promise<T> { //eslint-disable-line @typescript-eslint/no-explicit-any
    return new Promise((res, rej) => {
      this.action<T>(axios.post, request, payload, options)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static Patch<T>(request: string, payload: any, options?: AxiosRequestConfig): Promise<T> { //eslint-disable-line @typescript-eslint/no-explicit-any
    return new Promise((res, rej) => {
      this.action<T>(axios.patch, request, payload, options)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static Delete<T>(request: string, options?: AxiosRequestConfig): Promise<T> { //eslint-disable-line @typescript-eslint/no-explicit-any
    return new Promise((res, rej) => {
      this.action<T>(axios.delete, request, {}, options)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }
}
