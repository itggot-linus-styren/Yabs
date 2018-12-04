import axios from 'axios';

export default {

  async all() {

    try {
      const response = await axios.get(`api/v1/users`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }

  },
  async update(request: any) {

    try {
      const response = await axios.patch(`api/v1/users/${request.get("id")}`, request, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }

  },
};
