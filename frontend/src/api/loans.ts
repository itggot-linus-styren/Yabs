import axios from 'axios';
import { Loan, LoanForm } from '@/store/modules/LoansModule';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  async all(): Promise<Loan[]> {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/loans',
        {headers, withCredentials: true});
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async create(request: LoanForm): Promise<Loan> {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/loans', request,
        {headers, withCredentials: true});
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async update(request: LoanForm): Promise<Loan> {
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/loans/${request.id}`, request,
        {headers, withCredentials: true});
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async delete(request: Loan): Promise<number> {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/loans/${request.id}`,
        {headers, withCredentials: true});
      return Promise.resolve(response.data.id);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
