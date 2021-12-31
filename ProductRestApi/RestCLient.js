import axios from 'axios'

export default class RestCLient {
  static makeRequest = async (config) => {
    return await axios(config)
  }
  static getData = (url) => {
    return this.makeRequest({
      url: url,
      method: 'GET',
    })
      .then((res) => {
        return res.data
      })
      .catch(() => null)
  }
  static postData = (url, json) => {
    return this.makeRequest({
      url: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: json,
    })
      .then((response) => response.data)
      .catch(() => null)
  }

  static updateData = (url, json) => {
    return this.makeRequest({
      url: url,      
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },    
      data: json,
    })
      .then((response) => response.data)
      .catch(() => null)
  }
  static deleteData = (url) => {
    return this.makeRequest({
      url: url,      
      method: 'GET',
    })
      .then((response) => response.data)
      .catch(() => null)
  }
}


