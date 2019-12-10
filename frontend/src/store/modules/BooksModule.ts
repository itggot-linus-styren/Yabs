import Vue from 'vue';
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import store from '..';
import BooksAPI from '../../api/books';

interface BookState {
  books: {};
  failure: any;
}

@Module({dynamic: true, namespaced: true, name: 'BooksModule', store})
class BooksModule extends VuexModule {
  private bookState: BookState = {books: {}, failure: null};

  get all() {
    return this.bookState.books;
  }

  @Action({rawError: true})
  public fetchAll() {
    return new Promise((resolve, reject) => {
      BooksAPI.all()
        .then((response: any) => {
          response.forEach((book: any) => this.setBook(book));
          resolve();
        })
        .catch((error: any) => {
          this.setfailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public create(request: any) {
    return new Promise((resolve, reject) => {
      BooksAPI.create(request)
        .then((response: any) => {
          this.setBook(response);
          resolve(response);
        })
        .catch((error: any) => {
          this.setfailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public update(request: any) {
    return new Promise((resolve, reject) => {
      BooksAPI.update(request)
        .then((response: any) => {
          this.setBook(response);
          resolve(response);
        })
        .catch((error: any) => {
          this.setfailure(error);
          reject(error);
        });
    });
  }

  @Action({rawError: true})
  public delete(request: any) {
    return new Promise((resolve, reject) => {
      BooksAPI.delete(request)
        .then((response: any) => {
          this.removeBook(response);
          resolve(response);
        })
        .catch((error: any) => {
          this.setfailure(error);
          reject(error);
        });
    });
  }

  @Mutation
  private setBook(payload: any) {
    Vue.set(this.bookState.books, payload.barcode, payload);
  }

  @Mutation
  private removeBook(bookId: string) {
    Vue.delete(this.bookState.books, bookId);
  }

  @Mutation
  private setfailure(payload: any) {
    this.bookState.failure = payload;
  }
}

export default getModule(BooksModule);
