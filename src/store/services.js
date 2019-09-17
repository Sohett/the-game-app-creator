import API from '@/services/api'

export const user = {
  show () {
    return API.get(`/user`)
  }
}

export const app = {
  show (params) {
    return API.get(`/app?appOrigin=${params}`)
  }
}
