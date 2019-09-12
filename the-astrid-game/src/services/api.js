import axios from 'axios'
import * as camelCaseKeys from 'camelcase-keys'

const SERVER_URL = 'https://api.the-game.website'

axios.interceptors.request.use(
  function (config) {
    config.params.appOrigin = window.location.origin
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) { return formatResponse(response).data },
  function (error) {
    console.log(error)
    const { message } = error.response.data
    return {
      success: false,
      message: message || '🤭 Oops...petit problème technique. Contactez les techies.'
    }
  }
)

const formatResponse = ({ data: rawData, success, message }) => {
  let data
  if (rawData) {
    if (Array.isArray(rawData)) {
      data = rawData.map(x => camelCaseKeys(x, { deep: true }))
    } else {
      data = camelCaseKeys(rawData, { deep: true })
    }
  }

  return { data, success, message }
}

class API {
  static headers () {
    return {
      'Content-type': 'application/json'
    }
  }

  static async get (endPoint, params = {}) {
    const options = {
      baseURL: SERVER_URL,
      url: endPoint,
      method: 'GET',
      params,
      headers: this.headers()
    }
    return axios(options)
  }
}

export default API
