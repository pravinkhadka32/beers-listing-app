import axios from 'axios';

export default class Api {
  constructor() {
    this.axiosFunction = axios.create({
      baseURL: (process.env.REACT_APP_API_BASE_URL || "") + "/v2/"
    });
  }

  get = async (url, data) => {
    return this.axiosFunction
      .get(url, { params: data })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  };
}
