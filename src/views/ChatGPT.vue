<template>
  <div>
    <input v-model="userInput" >
    <div class="btn" @click="sendRequest">sendRequest</div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { chatGPTAPI } from '@/service/index.js'
export default {
  data() {
    return {
      userInput: '',
      messages: []
    }
  },
  methods: {
    sendRequest() {
      chatGPTAPI({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: this.userInput }],
        temperature: 0.7
      }).then(res => {
        // console.log(res.data.choices[0])
        this.messages.push({
          id: Date.now(),
          text: res.data.choices[0].message.content
        })
        this.userInput = ''
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
