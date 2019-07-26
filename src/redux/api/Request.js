import fetch from 'node-fetch';
import * as ApiConstants from '../../constants/ApiConstants';

class Request {
  connection(
    method,
    url,
    data,
    headers
  ) {
    const customHeaders = headers || {'Content-Type': 'application/x-www-form-urlencoded'};
    const apiUrl = url ? url : `${ApiConstants.BASE_URL}pokemon/?limit=3&offset=3`;
    return fetch(apiUrl, {
      method: method,
      headers: customHeaders
    })
  }
}

export default new Request();
