import axios from 'axios';
import { User, UserForm } from '@/types';

export default {

  async all(): Promise<User[]> {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/users', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async get(id: string): Promise<User> {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async update(request: FormData): Promise<User> {
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/users/${request.get('uid')}`, request, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async signIn(idToken: string): Promise<User> {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth', {id_token: idToken}, { //eslint-disable-line camelcase
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async signOut(): Promise<User> {
    try {
      const response = await axios.delete('http://localhost:3000/api/v1/auth/0', {
        withCredentials: true,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
