import axios from './tool.js'

export const chatGPTAPI = data => {
  return axios.post('https://api.openai.com/v1/chat/completions', data)
}
