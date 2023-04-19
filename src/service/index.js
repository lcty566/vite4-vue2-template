import axios from './tool.js'

export const completion = data => {
  return axios.post('https://api.openai.com/v1/completions', data)
}

export const edit = data => {
  return axios.post('https://api.openai.com/v1/edits', data)
}

export const chat = data => {
  return axios.post('https://api.openai.com/v1/chat/completions', data)
}

export const generations = data => {
  return axios.post('https://api.openai.com/v1/images/generations', data)
}
