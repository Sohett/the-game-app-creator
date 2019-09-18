import API from '@/services/api'

export const app = {
  show () {
    return API.get(`/user`)
  }
}

export const steps = {
  show (params) {
    return API.get(`/app?appOrigin=${params}`)
  }
}
