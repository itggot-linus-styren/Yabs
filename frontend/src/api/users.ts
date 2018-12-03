import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export default {

  async all() {

    try {
      const response = await axios.get(`api/v1/users`, {headers});
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }

  },
};
