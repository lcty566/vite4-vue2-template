import axios from 'axios'

const GET_URL = () => {
  const env = import.meta.env
  return env.VITE_BASE_URL
}

const service = axios.create({
  baseURL: GET_URL(),
  timeout: 60000,
  headers: {
    // Authorization: 'Bearer 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',
    Authorization: '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',
    'Content-Type': 'application/json'
  }
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
