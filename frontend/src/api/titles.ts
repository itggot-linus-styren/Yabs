import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
}

export default {

  async all() {

    try {
      const response = await axios.get(`api/v1/titles`, {headers: headers});
      return Promise.resolve(response.data);
    }
    catch (error) {
      return Promise.reject(error);
    }

  },
  async create(request : any) {

    try {
      const response = await axios.post(`api/v1/titles`, request, {headers: headers});
      return Promise.resolve(response.data);
    }
    catch (error) {
      return Promise.reject(error);
    }

  },
  async update(request : any) {

    try {
      const response = await axios.patch(`api/v1/titles/${request.id}`, request, {headers: headers});
      return Promise.resolve(response.data);
    }
    catch (error) {
      return Promise.reject(error);
    }

  },
  async delete(request : any) {

    try {
      const response = await axios.delete(`api/v1/titles/${request.id}`, {headers: headers});
      return Promise.resolve(response.data);
    }
    catch (error) {
      return Promise.reject(error);
    }

  },
}
