import API from '@/services/api'

export const client = {
  show () {
    return API.get(`/client`)
  }
}

export const app = {
  show () {
    return API.get(`/app`)
  }
}
