import axios from 'axios';
import { Book, BookForm } from '@/store/modules/BooksModule';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  async all(): Promise<Book[]> {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/books',
        { headers, withCredentials: true });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async create(request: BookForm): Promise<Book> {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/books', request, {
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
  async update(request: BookForm): Promise<Book> {
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/books/${request.barcode}`, request,
        { headers, withCredentials: true });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async delete(request: Book): Promise<string> {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/books/${request.barcode}`,
        { headers, withCredentials: true });
      return Promise.resolve(response.data.id);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
