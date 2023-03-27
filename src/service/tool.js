import axios from 'axios'

const GET_URL = () => {
  const env = import.meta.env
  return env.VITE_BASE_URL
}

const service = axios.create({
  baseURL: GET_URL(),
  timeout: 60000,
  headers: {
    Authorization: 'Bearer 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',
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
