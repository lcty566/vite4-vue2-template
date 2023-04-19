<template>
  <div class="container">
    <div class="content">
      <div class="message-list">
        <div class="message" v-for="(item,i) in  messageList" :key="i">
          {{item.text||item.content}}
          <!-- <img :src="item.url" alt=""> -->
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="input">
        <input type="text" v-model="inputValue">
      </div>
      <div class="btn" @click="sendRequest3">提问</div>
    </div>
  </div>
</template>

<script>
import { completion, edit, chat, generations } from '@/service/index.js'
export default {
  data() {
    return {
      inputValue: '',
      messageList: []
    }
  },
  methods: {
    sendRequest1() {
      this.messageList.push({
        text: this.inputValue
      })
      completion({
        model: 'text-davinci-003',
        prompt: this.inputValue,
        max_tokens: 2048,
        temperature: 0
      }).then(res => {
        console.log(res.data)
        this.messageList.push(
          res.data.choices[0]
        )
        this.inputValue = ''
      }).catch(error => {
        console.log(error)
      })
    },
    sendRequest2() {
      edit({
        model: 'text-davinci-edit-001',
        input: '',
        instruction: this.inputValue
      }).then(res => {
        console.log(res.data)
        this.messageList.push(
          res.data.choices[0]
        )
        this.inputValue = ''
      }).catch(error => {
        console.log(error)
      })
    },
    sendRequest3() {
      this.messageList.push({
        text: this.inputValue
      })
      chat({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: this.inputValue
          }
        ]
      }).then(res => {
        console.log(res.data)
        this.messageList.push(
          res.data.choices[0].message
        )
        this.inputValue = ''
      }).catch(error => {
        console.log(error)
      })
    },
    sendRequest4() {
      this.messageList.push({
        text: this.inputValue
      })
      generations({
        prompt: this.inputValue,
        size: '256x256'
      }).then(res => {
        console.log(res.data)
        this.messageList.push(
          res.data.data[0]
        )
        this.inputValue = ''
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container{
  padding-bottom: 100px;
  .content{
    padding: 25px;
    .message-list{
      .message{
        text-align: right;
        background-color: #fff;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: .266667rem;
        &:nth-child(2n){
          text-align: left;
        }
      }
    }
  }
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    .input{
      flex: 1;
      height: 50px;
      border: 1px solid #ccc;
      margin-right: 25px;
      padding: 0 10px;
      border-radius: 5px;
      input{
        width: 100%;
        height: 100%;
        font-size: 18px;
      }
    }
    .btn{
      width: 100px;
      height: 50px;
      border-radius: 5px;
      background-color: #74bae2;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
