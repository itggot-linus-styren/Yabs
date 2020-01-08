import { Book, BookForm } from '@/types';
import APIRequest from './APIRequest';

export default class BooksAPI extends APIRequest {

  static all(): Promise<Book[]> {
    return new Promise((res, rej) => {
      this.Get<Book[]>('v1/books')
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static single(id: string): Promise<Book> {
    return new Promise((res, rej) => {
      this.Get<Book>(`v1/books/${id}`)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    })
  }

  static create(request: BookForm): Promise<Book> {
    return new Promise((res, rej) => {
      this.Post<Book>('v1/books', request)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static update(request: BookForm): Promise<Book> {
    return new Promise((res, rej) => {
      this.Patch<Book>(`v1/books/${request.barcode}`, request)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static delete(request: Book): Promise<string> {
    return new Promise((res, rej) => {
      this.Delete<string>(`v1/books/${request.barcode}`)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }
}
