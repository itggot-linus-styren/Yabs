import { Loan, LoanForm } from '@/types';
import APIRequest from './APIRequest';

export default class LoansAPI extends APIRequest {

  static all(): Promise<Loan[]> {
    return new Promise((res, rej) => {
      this.Get<Loan[]>('v1/loans')
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static create(request: LoanForm): Promise<Loan> {
    return new Promise((res, rej) => {
      this.Post<Loan>('v1/loans', request)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
  }

  static update(request: LoanForm): Promise<Loan> {
    return new Promise((res, rej) => {
      this.Patch<Loan>(`v1/loans/${request.id}`, request)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });      
    });
  }

  static async delete(request: Loan): Promise<number> {
    return new Promise((res, rej) => {
      this.Delete<number>(`v1/loans/${request.id}`)
        .then((resp) => {res(resp); })
        .catch((err) => {rej(err); });
    });
    // try {
    //   const response = await axios.delete(`http://localhost:3000/api/v1/loans/${request.id}`, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     withCredentials: true,
    //   });
    //   return Promise.resolve(response.data.id);
    // } catch (error) {
    //   return Promise.reject(error);
    // }
  }
}
