import axios from 'axios'
import snakeCaseKeys from 'snakecase-keys'
import * as camelCaseKeys from 'camelcase-keys'
import { getIdToken } from './auth'

const SERVER_URL = 'https://api.the-game.website'

const formatData = (data) => {
  return snakeCaseKeys(data)
}

const formatResponse = (response) => {
  const data = response.data.data
  if (data) {
    if (Array.isArray(data)) {
      return data.map(x => camelCaseKeys(x, { deep: true }))
    } else {
      return camelCaseKeys(data, { deep: true })
    }
  }
}

class API {
  static headers () {
    return {
      'Authorization': `Bearer ${getIdToken()}`,
      'Content-type': 'application/json'
    }
  }

  static async get (endPoint, params = {}) {
    const options = {
      url: SERVER_URL + endPoint,
      method: 'GET',
      params,
      headers: this.headers()
    }
    const response = await axios(options)
    return formatResponse(response)
  }

  static async post (endPoint, data = {}) {
    const options = {
      url: SERVER_URL + endPoint,
      method: 'POST',
      data: formatData(data),
      headers: this.headers()
    }
    const response = await axios(options)
    return formatResponse(response)
  }

  static async put (endPoint, data = {}) {
    const options = {
      url: SERVER_URL + endPoint,
      method: 'PUT',
      data: formatData(data),
      headers: this.headers()
    }
    const response = await axios(options)
    return formatResponse(response)
  }
}

export default API
